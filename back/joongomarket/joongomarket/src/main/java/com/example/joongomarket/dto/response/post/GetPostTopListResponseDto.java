package com.example.joongomarket.dto.response.post;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import com.example.joongomarket.dto.response.ResponseDto;
import com.example.joongomarket.entity.PostsEntity;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class GetPostTopListResponseDto extends ResponseDto {
    private List<PostsEntity> postList;

    public GetPostTopListResponseDto() {
        super();
    }

    public static ResponseEntity<GetPostTopListResponseDto> success(List<PostsEntity> postList) {
        GetPostTopListResponseDto responseBody = new GetPostTopListResponseDto();
        responseBody.setPostList(postList);
        return ResponseEntity.status(HttpStatus.OK).body(responseBody);
    }

    public static ResponseEntity<ResponseDto> getTopPostFail() {
        ResponseDto responseBody = new ResponseDto();
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(responseBody);
    }
}
