package com.eiducamono.application.module.core.repository;

import com.eiducamono.application.module.common.RepositoryCommon;
import com.eiducamono.application.module.core.model.Person;
import org.springframework.stereotype.Repository;

@Repository
public interface PersonRepository extends RepositoryCommon<Person, String> {
}
