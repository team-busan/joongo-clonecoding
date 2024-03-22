package com.example.joongomarket.entity.primaryKey;

import jakarta.persistence.Column;
import lombok.Data;

@Data
public class BookmarkPK {
    @Column(name = "user_id")
    private String userId;

    @Column(name = "post_id")
    private int postId;
}
