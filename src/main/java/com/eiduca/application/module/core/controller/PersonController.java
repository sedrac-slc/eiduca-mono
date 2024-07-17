package com.eiduca.application.module.core.controller;

import com.eiduca.application.module.core.model.Person;
import com.eiduca.application.module.core.request.post.PersonPost;
import com.eiduca.application.module.core.request.put.PersonPut;
import com.eiduca.application.module.core.service.PersonService;
import jakarta.validation.Valid;
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

    @PostMapping
    public ResponseEntity<Person> save(@Valid @RequestBody PersonPost personPost){
        Person person = personPost.person();
        return  new ResponseEntity<>(personService.save(person), HttpStatus.CREATED);
    }

    @PutMapping
    public ResponseEntity<Person> update(@Valid @RequestBody PersonPut personPut){
        Person person = personPut.person();
        return  new ResponseEntity<>(personService.update(person), HttpStatus.OK);
    }

}
