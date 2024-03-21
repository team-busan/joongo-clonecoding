package com.example.joongomarket.dto.response.post;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import com.example.joongomarket.common.ResponseCode;
import com.example.joongomarket.common.ResponseMessage;
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

    public static ResponseEntity<PostCommentResponseDto> success(PostsEntity postsEntity, List<CommentEntity> commentList) {
        PostCommentResponseDto responseBody = new PostCommentResponseDto();
        responseBody.setPostsEntity(postsEntity);
        responseBody.setCommentList(commentList);
        return ResponseEntity.status(HttpStatus.OK).body(responseBody);
    }

    public static ResponseEntity<ResponseDto> existUser() {
        ResponseDto responseBody = new ResponseDto(ResponseCode.NOT_EXIST_USER, ResponseMessage.NOT_EXIST_USER);
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(responseBody);
    }

    public static ResponseEntity<ResponseDto> existPost() {
        ResponseDto responseBody = new ResponseDto(ResponseCode.NOT_EXIST_POST, ResponseMessage.NOT_EXIST_POST);
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(responseBody);
    }

    public static ResponseEntity<ResponseDto> postCommentFail() {
        ResponseDto responseBody = new ResponseDto();
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(responseBody);
    }
    
}
