package com.eiduca.application.module.core.exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ProblemDetail;
import org.springframework.http.ResponseEntity;

public class ExceptionFoundation {

    private ResponseEntity<ProblemDetail> exception(Exception exception , HttpStatus httpStatusCode, String detail) {
        ProblemDetail problemDetail = ProblemDetail.forStatusAndDetail(httpStatusCode, detail);
        problemDetail.setDetail(exception.getMessage());
        return ResponseEntity.status(httpStatusCode).body(problemDetail);
    }

    protected ResponseEntity<ProblemDetail> exception(Exception exception , HttpStatus httpStatusCode) {
       return exception(exception, httpStatusCode, exception.getMessage());
    }

    protected ResponseEntity<ProblemDetail> exception(Exception exception) {
        return exception(exception, HttpStatus.BAD_REQUEST);
    }

}
