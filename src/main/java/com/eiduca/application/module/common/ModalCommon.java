package com.eiduca.application.module.common;

import jakarta.persistence.Column;
import jakarta.persistence.Id;
import jakarta.persistence.MappedSuperclass;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.With;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;
import org.hibernate.annotations.UuidGenerator;

import java.time.LocalDateTime;

@Data
@With
@MappedSuperclass
@NoArgsConstructor
@AllArgsConstructor
public class ModalCommon {
    @Id
    @UuidGenerator
    @Column(length = 32)
    private String id;
    @Column(nullable = true)
    private String createdBy;
    @Column(nullable = true)
    private String updatedBy;
    @Column(nullable = true)
    private String deletedBy;
    @CreationTimestamp
    private LocalDateTime createdAt;
    @UpdateTimestamp
    private LocalDateTime updatedAt;
    @Column(nullable = true)
    private LocalDateTime deletedAt;
}
