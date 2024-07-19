package com.eiducamono.application.module.core.request.put;

import com.eiducamono.application.module.core.model.Person;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotNull;

import java.time.LocalDate;

public record PersonPut(
        @NotNull String id,
        @NotNull String fullName,
        @NotNull String username,
        @Email String email,
        @NotNull String password,
        @NotNull LocalDate birthday
) {

    public Person person(){
        Person person = Person.builder().fullName(fullName).username(username).email(email).password(password).birthday(birthday).build();
        person.setId(id);
        return person;
    }

}
