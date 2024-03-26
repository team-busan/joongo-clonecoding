package com.example.joongomarket.dto.response.user;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import com.example.joongomarket.dto.response.ResponseDto;

import lombok.Getter;

@Getter
public class ValidateNicknameResponseDto extends ResponseDto{
    private boolean result;
    
    private ValidateNicknameResponseDto() {
        super();
    }

    public static ResponseEntity<ValidateNicknameResponseDto> success() {
        ValidateNicknameResponseDto responseBody = new ValidateNicknameResponseDto();
        return ResponseEntity.status(HttpStatus.OK).body(responseBody);
    }

    public static ResponseEntity<ResponseDto> existNickname() {
        ResponseDto responseBody = new ResponseDto();
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(responseBody);
    }

    public static ResponseEntity<ResponseDto> validateNicknameFail() {
        ResponseDto responseBody = new ResponseDto();
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(responseBody);
    }
}