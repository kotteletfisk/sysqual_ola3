/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */

package com.kfisk;

import io.javalin.http.Context;
import io.javalin.validation.ValidationException;

/**
 *
 * @author kotteletfisk
 */
public class RequestValidator {

    // Not really testable?
    public Task validateForCreation(Context ctx) throws ValidationException {
        return ctx.bodyValidator(Task.class)
                    .check(task -> task.title.length() > 0, "Title must be a least one character")
                    .check(task -> !task.isCompleted, "Task cannot be created as completed")
                    .get();
    }

    public boolean validateForCreation(Task t) {
        return (!t.isCompleted) && t.title.length() > 0;
    }
}
