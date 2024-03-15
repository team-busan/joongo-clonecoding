package com.example.joongomarket.dto.response.post;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import com.example.joongomarket.common.ResponseCode;
import com.example.joongomarket.common.ResponseMessage;
import com.example.joongomarket.dto.response.ResponseDto;

import lombok.Getter;

@Getter
public class PostResponseDto extends ResponseDto{

    private PostResponseDto() {
        super();
    }

    public static ResponseEntity<PostResponseDto> success() {
        PostResponseDto responseBody = new PostResponseDto();
        return ResponseEntity.status(HttpStatus.OK).body(responseBody);
    }

    public static ResponseEntity<ResponseDto> postFail() {
        ResponseDto responseBody = new ResponseDto(ResponseCode.POST_FAIL, ResponseMessage.POST_FAIL);
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(responseBody);
    }
}
