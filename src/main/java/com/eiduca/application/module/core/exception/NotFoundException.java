package com.eiduca.application.module.core.exception;


public class NotFoundException extends RuntimeException{

    public NotFoundException() {
        super("Nof found entity");
    }

    public NotFoundException(String message) {
        super(message);
    }
}
