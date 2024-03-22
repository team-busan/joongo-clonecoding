package com.example.joongomarket.entity;

import com.example.joongomarket.entity.primaryKey.BookmarkPK;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.IdClass;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
@Entity(name = "bookmark")
@Table(name = "bookmark")
@IdClass(BookmarkPK.class)
public class BookmarkEntity {
    @Id
    private String userId;
    @Id
    private int postId;
}
