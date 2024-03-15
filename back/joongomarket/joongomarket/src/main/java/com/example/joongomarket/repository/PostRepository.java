package com.example.joongomarket.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.joongomarket.entity.PostsEntity;

@Repository
public interface PostRepository extends JpaRepository<PostsEntity, Integer> {
    PostsEntity findByPostId(int postId);
}
