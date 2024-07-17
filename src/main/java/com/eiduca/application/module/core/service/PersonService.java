package com.eiduca.application.module.core.service;

import com.eiduca.application.module.core.exception.NotFoundException;
import com.eiduca.application.module.core.model.Person;
import com.eiduca.application.module.core.repository.PersonRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
public class PersonService {
    private final PersonRepository personRepository;

    public Page<Person> findAll(Pageable pageable){
        return personRepository.findAll(pageable);
    }

    public Person findById(String id){
        return personRepository.findById(id).orElseThrow(() -> new NotFoundException("Person not found"));
    }

    @Transactional
    public Person save(Person person){
        return personRepository.save(person);
    }

    @Transactional
    public Person update(Person person){
        findById(person.getId());
        return personRepository.save(person);
    }

}
