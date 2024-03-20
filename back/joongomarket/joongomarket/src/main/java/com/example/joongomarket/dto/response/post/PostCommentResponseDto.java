package com.example.joongomarket.dto.response.post;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import com.example.joongomarket.dto.response.ResponseDto;
import com.example.joongomarket.entity.CommentEntity;
import com.example.joongomarket.entity.PostsEntity;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class PostCommentResponseDto extends ResponseDto{
    private PostsEntity postsEntity;

    private List<CommentEntity> commentList;

    private PostCommentResponseDto() {
        super();
    }

    public ResponseEntity<PostCommentResponseDto> success() {
        PostCommentResponseDto responseBody = new PostCommentResponseDto();
        return ResponseEntity.status(HttpStatus.OK).body(responseBody);
    }
}
