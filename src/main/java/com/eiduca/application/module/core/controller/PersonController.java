package com.eiduca.application.module.core.controller;

import com.eiduca.application.module.core.model.Person;
import com.eiduca.application.module.core.service.PersonService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("api/v1/persons")
public class PersonController {
    private final PersonService personService;

    @GetMapping
    public ResponseEntity<Page<Person>> findAll(Pageable pageable){
        return new ResponseEntity<>(personService.findAll(pageable), HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Person> findById(@PathVariable String id){
        return new ResponseEntity<>(personService.findById(id), HttpStatus.OK);
    }

}
