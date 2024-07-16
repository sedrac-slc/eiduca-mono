package com.eiduca.application.module.core.model;

import com.eiduca.application.module.common.ModalCommon;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotNull;

import java.time.LocalDate;

@Entity
@Table(name = "TB_PERSONS")
public class Person extends ModalCommon {
    @NotNull private String fullName;
    @NotNull private String username;
    @Email private String email;
    private String password;
    private LocalDate birthday;
}
