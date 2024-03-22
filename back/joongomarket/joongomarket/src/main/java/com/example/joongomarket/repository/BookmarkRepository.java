package com.example.joongomarket.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.joongomarket.entity.BookmarkEntity;
import com.example.joongomarket.entity.primaryKey.BookmarkPK;

@Repository
public interface BookmarkRepository extends JpaRepository<BookmarkEntity, BookmarkPK>{
    List<BookmarkEntity> findByPostId(int postId);
    BookmarkEntity findByUserIdAndPostId(String userId, int postId);
    void deleteByPostId(int postId);
}
