package com.example.joongomarket.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
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

    @ManyToOne
    @Column(name = "post_id")
    private int postId;

    @ManyToOne
    @Column(name = "user_id")
    private String userId;
    
    private String commentContent;
    private String writeDateTime;
}
