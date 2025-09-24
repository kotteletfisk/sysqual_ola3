package com.kfisk;

import java.util.List;

import io.javalin.http.Context;
import io.javalin.http.HttpStatus;

public class RouteController {

    private final PersistenceManager dao;
    private final RequestValidator validator = new RequestValidator();

    public RouteController(PersistenceManager dao) {
        this.dao = dao;
    }

    public void getAllTasks(Context ctx) {
        try {
            List<Task> tasks = dao.getAllTasks();
            ctx.json(tasks);
        } catch (Exception e) {
            ctx.status(500).result("Error fetching tasks");
        }
    }

    public void createTask(Context ctx) {
        try {

            // Task task = validator.validateForCreation(ctx); 
            Task task = ctx.bodyAsClass(Task.class);

            if (validator.validateForCreation(task)) {
                dao.createTask(task);
                ctx.status(201).json(task);
            } else {
                ctx.status(HttpStatus.BAD_REQUEST)
                    .result("Bad input: " + task.toString());
            }
        } catch (Exception e) {
            ctx.status(500).result("Error creating task");
        }
    }

    public void setTaskComplete(Context ctx) {
        try {
            Task input = ctx.bodyAsClass(Task.class);
            dao.setCompletion(input.isCompleted, input.title);
            ctx.status(200).result("Task updated");
        } catch (Exception e) {
            ctx.status(500).result("Error updating task");
        }
    }

    public void deleteTask(Context ctx) {
        try {
            String title = ctx.bodyAsClass(String.class);
            dao.deleteTask(title);
            ctx.status(200).result("Task deleted");
        } catch (Exception e) {
            ctx.status(500).result("Error deleting task");
        }
    }

}
