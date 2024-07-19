package com.eiducamono.application.module.core.response;

import java.time.LocalDate;

public record PersonResponse(String fullName, String username, String email, LocalDate birthday) {
}
