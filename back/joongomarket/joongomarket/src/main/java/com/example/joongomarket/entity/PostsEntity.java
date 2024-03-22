package com.example.joongomarket.entity;

import java.text.SimpleDateFormat;
import java.util.Date;

import com.example.joongomarket.dto.request.post.PostRequestDto;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
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
    private String writerNickname;
    private String writerProfile;

    public PostsEntity(PostRequestDto dto, UsersEntity usersEntity) {
        Date now = new Date();
        SimpleDateFormat simpleDateFormat = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        this.userId = usersEntity.getUserId();
        this.mainUploadUrl = dto.getMainCategory();
        this.subCategory = dto.getSubUploadUrl();
        this.title = dto.getTitle();
        this.content = dto.getContent();
        this.writeDateTime = simpleDateFormat.format(now);
        this.viewCount = 0;
        this.price = dto.getPrice();
        this.mainCategory = dto.getMainCategory();
        this.subCategory = dto.getSubCategory();
        this.productStatus = dto.getProductStatus();
        this.type = dto.getType();
        this.salesStatus = dto.getSalesStatus();
        this.writerNickname = usersEntity.getUserNickname();
        this.writerProfile = usersEntity.getUserProfile();
    }
}
