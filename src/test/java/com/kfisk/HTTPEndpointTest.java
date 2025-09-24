package com.kfisk;

import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.nio.file.Paths;

import org.junit.jupiter.api.AfterAll;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestInstance;
import org.testcontainers.containers.GenericContainer;
import org.testcontainers.utility.MountableFile;

@TestInstance(TestInstance.Lifecycle.PER_CLASS)
public class HTTPEndpointTest {

    static GenericContainer<?> api;
    static HttpClient client;
    static String baseUrl;
    PersistenceManager dao;

    @BeforeAll
    void startContainer() throws Exception {
        api = new GenericContainer<>("taskmanageapi:test")
                .withEnv("APP_ENV", "test")
                .withCopyFileToContainer(
                        MountableFile.forHostPath(
                                Paths.get("src", "test", "java", "test.db").toString()),
                        "/data/test.db")
                .withExposedPorts(7000);
        api.start();

        int mappedPort = api.getMappedPort(7000);
        String host = api.getHost();
        baseUrl = "http://" + host + ":" + mappedPort + "/api";
        client = HttpClient.newHttpClient();

        dao = new PersistenceManager("jdbc:sqlite:src/test/java/test.db");
    }

    @AfterAll
    void stopContainer() throws Exception {
        dao.initDB();
        api.stop();
    }

    @BeforeEach
    void resetDb() throws Exception {
        dao.initDB();
        dao.createTask(new Task("Test task", false));
    }

    @Test
    void testGetAllTasks() throws Exception {
        HttpRequest get = HttpRequest.newBuilder()
                .uri(URI.create(baseUrl + "/getAllTasks"))
                .GET()
                .build();
        HttpResponse<String> response = client.send(get, HttpResponse.BodyHandlers.ofString());

        assertEquals(200, response.statusCode());

    }

    @Test
    void testCreateTask() throws Exception {
        String json = """
                {"title":"New Task","isCompleted":false}
                """;
        HttpRequest request = HttpRequest.newBuilder()
                .uri(URI.create(baseUrl + "/createTask"))
                .header("Content-Type", "application/json")
                .POST(HttpRequest.BodyPublishers.ofString(json))
                .build();
        HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());

        assertEquals(201, response.statusCode());
        assertTrue(response.body().contains("New Task"));
    }

    @Test
    void testSetTaskComplete() throws Exception {
        String updateJson = """
                {"title":"Test task","isCompleted":true}
                """;
        HttpRequest request = HttpRequest.newBuilder()
                .uri(URI.create(baseUrl + "/setTaskComplete"))
                .header("Content-Type", "application/json")
                .PUT(HttpRequest.BodyPublishers.ofString(updateJson))
                .build();
        HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());

        assertEquals(200, response.statusCode());
        assertTrue(response.body().contains("updated"));
    }

    @Test
    void testDeleteTask() throws Exception {
        HttpRequest request = HttpRequest.newBuilder()
                .uri(URI.create(baseUrl + "/deleteTask"))
                .header("Content-Type", "application/json")
                .method("DELETE", HttpRequest.BodyPublishers.ofString("\"Test task\""))
                .build();
        HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());

        assertEquals(200, response.statusCode());
        assertTrue(response.body().contains("deleted"));
    }
}
