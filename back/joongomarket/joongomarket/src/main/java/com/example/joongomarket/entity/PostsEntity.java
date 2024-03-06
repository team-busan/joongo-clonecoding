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
@Entity(name = "posts")
@Table(name = "posts")
public class PostsEntity {
    @Id
    private int postId;

    @ManyToOne
    @Column(name = "user_id")
    private String userId;

    private String mainUploadUrl;
    private String subUploadUrl;
    private String title;
    private String content;
    private String writeDateTime;
    private int viewCount;
    private int price;
    private String mainCategory;
    private String subCategory;
    private String productStatus;
    private int type;
    private int salesStatus;
}
