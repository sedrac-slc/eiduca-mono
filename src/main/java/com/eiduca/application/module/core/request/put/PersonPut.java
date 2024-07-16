package com.eiduca.application.module.core.request.put;

import java.time.LocalDate;

public record PersonPut(
        String fullName,String username,String email, LocalDate birthday
) {
}
