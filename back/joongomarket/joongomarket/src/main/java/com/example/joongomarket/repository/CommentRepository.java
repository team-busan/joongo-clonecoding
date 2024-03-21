package com.example.joongomarket.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.joongomarket.entity.CommentEntity;

@Repository
public interface CommentRepository extends JpaRepository<CommentEntity, Integer>{
    List<CommentEntity> findByPostIdOrderByWriteDateTimeDesc(int postId);
}
