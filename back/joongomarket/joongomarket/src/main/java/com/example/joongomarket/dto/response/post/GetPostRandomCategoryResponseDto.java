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
public class GetPostRandomCategoryResponseDto extends ResponseDto{
    private List<PostsEntity> postList;

    public GetPostRandomCategoryResponseDto() {
        super();
    }

    public static ResponseEntity<GetPostRandomCategoryResponseDto> success(List<PostsEntity> postList) {
        GetPostRandomCategoryResponseDto responseBody = new GetPostRandomCategoryResponseDto();
        responseBody.setPostList(postList);
        return ResponseEntity.status(HttpStatus.OK).body(responseBody);
    }
    
    public static ResponseEntity<ResponseDto> getPostRandomFail() {
        ResponseDto resposneBody = new ResponseDto();
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(resposneBody);
    }

}
