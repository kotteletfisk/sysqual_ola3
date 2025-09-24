package com.kfisk;

import io.javalin.Javalin;

public class App {
    public static void main(String[] args) throws Exception{

        String env = System.getenv().getOrDefault("APP_ENV", "prod");
        String dbUrl;

        if ("prod".equals(env)) {
            dbUrl = "jdbc:sqlite:data/prod.db";
        } else {
            dbUrl = "jdbc:sqlite:/data/test.db";
        }

        var controller = new RouteController(new PersistenceManager(dbUrl));

        var app = Javalin.create()
                .get("/api/getAllTasks", controller::getAllTasks)
                .post("/api/createTask", controller::createTask)
                .put("/api/setTaskComplete", controller::setTaskComplete)
                .delete("/api/deleteTask", controller::deleteTask)
                .start(7000);
    }

}
