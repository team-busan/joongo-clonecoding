package com.example.joongomarket.entity;

import java.text.SimpleDateFormat;
import java.util.Date;

import com.example.joongomarket.dto.request.post.PostCommentRequestDto;

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
    private String writerNickname;
    private String writerProfile;

    public CommentEntity(UsersEntity usersEntity, PostCommentRequestDto dto) {
        Date now = new Date();
        SimpleDateFormat simpleDateFormat = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");

        this.postId = dto.getPostId();
        this.commentContent = dto.getCommentContent();
        this.userId = usersEntity.getUserId();
        this.writerNickname = usersEntity.getUserNickname();
        this.writerProfile = usersEntity.getUserProfile();
        this.writeDateTime = simpleDateFormat.format(now);
    }
}
