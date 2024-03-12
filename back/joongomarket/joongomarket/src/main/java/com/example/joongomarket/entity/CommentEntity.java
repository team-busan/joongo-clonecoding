package com.example.joongomarket.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
@Entity(name = "comment")
@Table(name = "comment")
public class CommentEntity {
    @Id
    private int commentId;

    private int postId;

    private String userId;
    
    private String commentContent;
    private String writeDateTime;
}
