package com.eiducamono.application.module.core.exception;

import org.springframework.http.ProblemDetail;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class ExceptionHandlerConfig extends ExceptionAbstract {

    @ExceptionHandler(NotFoundException.class)
    public ResponseEntity<ProblemDetail> handlerNotFoundException(NotFoundException exception){
        return exception(exception);
    }

}
