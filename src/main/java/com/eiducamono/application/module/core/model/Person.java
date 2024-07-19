package com.eiducamono.application.module.core.model;

import com.eiducamono.application.module.common.ModalCommon;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotNull;
import lombok.experimental.SuperBuilder;

import java.time.LocalDate;

@Entity
@SuperBuilder
@Table(name = "TB_PERSONS")
public class Person extends ModalCommon {
    @NotNull private String fullName;
    @NotNull private String username;
    @Email private String email;
    private String password;
    private LocalDate birthday;
}
