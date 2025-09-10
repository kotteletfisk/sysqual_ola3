package com.kfisk;

import org.junit.jupiter.api.*;
import org.testcontainers.containers.GenericContainer;
import org.testcontainers.images.builder.ImageFromDockerfile;
import java.nio.file.Paths;


public class HTTPEndpointTest {

    static GenericContainer<?> api;

    @BeforeAll
    static void startContainer() {
        ImageFromDockerfile image = new ImageFromDockerfile()
                .withFileFromPath(".", Paths.get("."));

        api = new GenericContainer<>(image)
                .withExposedPorts(7000);
        api.start();
    }

    @AfterAll
    static void stopContainer() {
        api.stop();
    }

}
