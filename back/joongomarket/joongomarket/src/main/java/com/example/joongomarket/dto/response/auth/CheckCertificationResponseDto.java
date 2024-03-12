package com.example.joongomarket.dto.response.auth;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import com.example.joongomarket.dto.response.ResponseDto;

import lombok.Getter;

@Getter
public class CheckCertificationResponseDto extends ResponseDto{

    private CheckCertificationResponseDto () {
        super();
    }

    public static ResponseEntity<CheckCertificationResponseDto> success() {
        CheckCertificationResponseDto responseBody = new CheckCertificationResponseDto();
        return ResponseEntity.status(HttpStatus.OK).body(responseBody);
    }

    public static ResponseEntity<ResponseDto> certificationFail() {
        ResponseDto responseBody = new ResponseDto();
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(responseBody);
    }
    
}
