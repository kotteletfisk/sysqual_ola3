package com.kfisk;

import java.io.IOException;
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.sql.SQLException;
import java.util.List;

import org.junit.jupiter.api.AfterAll;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;
import static org.junit.jupiter.api.Assertions.fail;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestInstance;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mockito;
import static org.mockito.Mockito.doThrow;
import static org.mockito.Mockito.when;
import org.mockito.junit.jupiter.MockitoExtension;

import io.javalin.Javalin;
import io.javalin.validation.ValidationException;

@TestInstance(TestInstance.Lifecycle.PER_CLASS)
@ExtendWith(MockitoExtension.class)
public class RouteTest {

    private static Javalin app;
    static HttpClient client;
    private final static String baseUrl = "http://localhost:7001/api";

    private PersistenceManager pm; // Mock

    @BeforeAll
    void setup() {

        pm = Mockito.mock(PersistenceManager.class);

        var controller = new RouteController(pm);
        client = HttpClient.newHttpClient();
        app = Javalin.create()
                .get("/api/getAllTasks", controller::getAllTasks)
                .post("/api/createTask", controller::createTask)
                .put("/api/setTaskComplete", controller::setTaskComplete)
                .delete("/api/deleteTask", controller::deleteTask)
                .start(7001);
        app.exception(ValidationException.class, (e, ctx) -> {
            ctx.json(e.getErrors()).status(400);
        });
        app.exception(Exception.class, (e, ctx) -> {
            e.printStackTrace();
            ctx.status(500).result("Internal Error: " + e.getMessage());
        });
    }

    @AfterAll
    void tearDown() {
        app.stop();
    }

    @Test
    void getAllTaskTest() throws SQLException {

        when(pm.getAllTasks()).thenReturn(List.of(
                new Task("test1", false),
                new Task("test2", false),
                new Task("test3", true)
        ));

        HttpRequest get = HttpRequest.newBuilder()
                .uri(URI.create(baseUrl + "/getAllTasks"))
                .GET()
                .build();

        try {
            HttpResponse<String> response = client.send(get, HttpResponse.BodyHandlers.ofString());
            assertEquals(200, response.statusCode());
            assertTrue(response.body().contains("test1"));
            assertTrue(response.body().contains("test2"));
            assertTrue(response.body().contains("test3"));

        } catch (Exception e) {
            fail(e.getMessage());
        }

    }

    @Test
    void createTaskSuccesfullyTest() throws SQLException {

        String json = """
                {"title":"New Task","isCompleted":false}
                """;
        HttpRequest request = HttpRequest.newBuilder()
                .uri(URI.create(baseUrl + "/createTask"))
                .header("Content-Type", "application/json")
                .POST(HttpRequest.BodyPublishers.ofString(json))
                .build();
        HttpResponse<String> response;
        try {
            response = client.send(request, HttpResponse.BodyHandlers.ofString());
            assertEquals(201, response.statusCode());
            assertTrue(response.body().contains("New Task"));

        } catch (Exception e) {
            fail(e.getMessage());
        }

    }

    @Test
    void createTaskEmptyNameFailureTest() throws SQLException {

        String json = """
                {"title":"","isCompleted":false}
                """;
        HttpRequest request = HttpRequest.newBuilder()
                .uri(URI.create(baseUrl + "/createTask"))
                .header("Content-Type", "application/json")
                .POST(HttpRequest.BodyPublishers.ofString(json))
                .build();

        HttpResponse<String> response;
        try {
            response = client.send(request, HttpResponse.BodyHandlers.ofString());
            assertEquals(400, response.statusCode());
            assertTrue(response.body().contains("Title must be a least one character"));

        } catch (Exception e) {
            fail(e.getMessage());
        }

    }

    @Test
    void createTaskCompletedFailureTest() throws SQLException {

        String json = """
                {"title":"name","isCompleted":true}
                """;
        HttpRequest request = HttpRequest.newBuilder()
                .uri(URI.create(baseUrl + "/createTask"))
                .header("Content-Type", "application/json")
                .POST(HttpRequest.BodyPublishers.ofString(json))
                .build();

        HttpResponse<String> response;
        try {
            response = client.send(request, HttpResponse.BodyHandlers.ofString());
            assertEquals(400, response.statusCode());
            assertTrue(response.body().contains("Task cannot be created as completed"));

        } catch (Exception e) {
            fail(e.getMessage());
        }
    }

    @Test
    void setTaskCompleteSuccesfullTest() throws Exception {

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
    void setTaskCompleteNotFoundTest() throws Exception {

        // mock setup
        doThrow(new SQLException())
                .when(pm)
                .setCompletion(true, "Nonexistent");

        // test
        String updateJson = """
                {"title":"Nonexistent","isCompleted":true}
                """;
        HttpRequest request = HttpRequest.newBuilder()
                .uri(URI.create(baseUrl + "/setTaskComplete"))
                .header("Content-Type", "application/json")
                .PUT(HttpRequest.BodyPublishers.ofString(updateJson))
                .build();

        HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());

        assertEquals(500, response.statusCode());
    }

    @Test
    void deletaskSuccesfullyTest() throws Exception {

        HttpRequest request = HttpRequest.newBuilder()
                .uri(URI.create(baseUrl + "/deleteTask"))
                .header("Content-Type", "application/json")
                .method("DELETE", HttpRequest.BodyPublishers.ofString("\"Test task\""))
                .build();
        HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());

        assertEquals(200, response.statusCode());
        assertTrue(response.body().contains("deleted"));
    }   
    
    @Test
    void deletaskNotFoundTest() throws Exception {

        // mock setup
        doThrow(new SQLException())
                .when(pm)
                .deleteTask("Nonexistent");
        
        // test
        HttpRequest request = HttpRequest.newBuilder()
                .uri(URI.create(baseUrl + "/deleteTask"))
                .header("Content-Type", "application/json")
                .method("DELETE", HttpRequest.BodyPublishers.ofString("\"Nonexistent\""))
                .build();
        HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());

        assertEquals(500, response.statusCode());
    }
}
