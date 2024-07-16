package com.eiduca.application.module.core.request.post;

import java.time.LocalDate;

public record PersonPost(
        String fullName,String username,String email,String password, LocalDate birthday
) {
}
