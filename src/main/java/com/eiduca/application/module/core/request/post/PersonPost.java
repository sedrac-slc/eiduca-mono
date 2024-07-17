package com.eiduca.application.module.core.request.post;

import com.eiduca.application.module.core.model.Person;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotNull;

import java.time.LocalDate;

public record PersonPost(
        @NotNull String fullName,
        @NotNull String username,
        @Email String email,
        @NotNull String password,
        @NotNull LocalDate birthday
) {
    public Person person(){
        return Person.builder()
                .fullName(fullName)
                .username(username)
                .email(email)
                .password(password)
                .birthday(birthday)
                .build();
    }
}
