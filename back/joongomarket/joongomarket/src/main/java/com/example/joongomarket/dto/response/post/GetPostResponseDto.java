package com.example.joongomarket.dto.response.post;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import com.example.joongomarket.common.ResponseCode;
import com.example.joongomarket.common.ResponseMessage;
import com.example.joongomarket.dto.response.ResponseDto;
import com.example.joongomarket.entity.PostsEntity;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class GetPostResponseDto extends ResponseDto {
    private PostsEntity postsEntity;

    private GetPostResponseDto() {
        super();
    }

    public static ResponseEntity<GetPostResponseDto> success(PostsEntity postsEntity) {
        GetPostResponseDto responseBody = new GetPostResponseDto();
        responseBody.setPostsEntity(postsEntity);
        return ResponseEntity.status(HttpStatus.OK).body(responseBody);
    }

    public static ResponseEntity<ResponseDto> existPost() {
        ResponseDto responseBody = new ResponseDto(ResponseCode.NOT_EXIST_POST, ResponseMessage.NOT_EXIST_POST);
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(responseBody);
    }

    public static ResponseEntity<ResponseDto> getPostFail() {
        ResponseDto responseBody = new ResponseDto();
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(responseBody);
    }
}
