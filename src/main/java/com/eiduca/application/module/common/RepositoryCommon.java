package com.eiduca.application.module.common;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.NoRepositoryBean;

import java.util.Optional;

@NoRepositoryBean
public interface RepositoryCommon<T extends ModalCommon, I> extends JpaRepository<T, I> {
    @Override
    @Query(name = "ModelCommon.findAll", countName = "ModelCommon.findAllCount")
    Page<T> findAll(Pageable pageable);

    @Override
    @Query(name = "ModelCommon.findById")
    Optional<T> findById(I id);
}
