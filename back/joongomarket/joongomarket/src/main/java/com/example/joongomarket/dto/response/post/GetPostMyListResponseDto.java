package com.example.joongomarket.dto.response.post;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import com.example.joongomarket.common.ResponseCode;
import com.example.joongomarket.common.ResponseMessage;
import com.example.joongomarket.dto.response.ResponseDto;
import com.example.joongomarket.dto.response.post.filed.GetPostListItemDto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class GetPostMyListResponseDto extends ResponseDto{
    private GetPostMyListResponseDto(List<GetPostListItemDto> posts) {
        super();
        this.posts = posts;
    }

    private List<GetPostListItemDto> posts;

    public static ResponseEntity<GetPostMyListResponseDto> success(List<GetPostListItemDto> posts) {
        GetPostMyListResponseDto responseBody = new GetPostMyListResponseDto(posts);
        return ResponseEntity.status(HttpStatus.OK).body(responseBody);
    }

    public static ResponseEntity<ResponseDto> getPostMyListFail() {
        ResponseDto responseBody = new ResponseDto(ResponseCode.DATABASE_ERROR, ResponseMessage.DATABASE_ERROR);
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(responseBody);
    }
    
}
