package com.eiduca.application.module.core.repository;

import com.eiduca.application.module.common.RepositoryCommon;
import com.eiduca.application.module.core.model.Person;
import org.springframework.stereotype.Repository;

@Repository
public interface PersonRepository extends RepositoryCommon<Person, String> {
}
