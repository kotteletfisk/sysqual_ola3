package com.kfisk;

import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.TestInstance;

import io.javalin.Javalin;

/**
 *
 * @author kotteletfisk
 */
@TestInstance(TestInstance.Lifecycle.PER_CLASS)
public class RouteTest {

    private static Javalin app;

    @BeforeAll
    void setup() {
        var controller = new RouteController(null);
        app = Javalin.create()
                .get("/api/getAllTasks", controller::getAllTasks)
                .post("/api/createTask", controller::createTask)
                .put("/api/setTaskComplete", controller::setTaskComplete)
                .delete("/api/deleteTask", controller::deleteTask)
                .start(7001);
    }

    @AfterAll
    void tearDown() {
        app.stop();
    }

/*     @Test 
    void createTaskTest() {
        
    } */
}
