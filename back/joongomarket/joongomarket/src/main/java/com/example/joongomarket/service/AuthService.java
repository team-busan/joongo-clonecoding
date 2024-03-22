package com.example.joongomarket.service;

import org.springframework.http.ResponseEntity;

import com.example.joongomarket.dto.request.auth.CheckCertificationRequestDto;
import com.example.joongomarket.dto.request.auth.EmailCertificationRequestDto;
import com.example.joongomarket.dto.request.auth.EmailCheckRequestDto;
import com.example.joongomarket.dto.request.auth.IdCheckRequestDto;
import com.example.joongomarket.dto.request.auth.SignInRequestDto;
import com.example.joongomarket.dto.request.auth.SignUpRequestDto;
import com.example.joongomarket.dto.response.auth.CheckCertificationResponseDto;
import com.example.joongomarket.dto.response.auth.EmailCertificationResponseDto;
import com.example.joongomarket.dto.response.auth.EmailCheckResponseDto;
import com.example.joongomarket.dto.response.auth.IdCheckResponseDto;
import com.example.joongomarket.dto.response.auth.SignInResponseDto;
import com.example.joongomarket.dto.response.auth.SignUpResponseDto;

public interface AuthService {
    ResponseEntity<? super IdCheckResponseDto> idCheck(IdCheckRequestDto dto);
    ResponseEntity<? super EmailCertificationResponseDto> emailCertification(EmailCertificationRequestDto dto);
    ResponseEntity<? super CheckCertificationResponseDto> checkCertification(CheckCertificationRequestDto dto);
    ResponseEntity<? super SignUpResponseDto> signUp(SignUpRequestDto dto);
    ResponseEntity<? super EmailCheckResponseDto> emailCheck(EmailCheckRequestDto dto);
    ResponseEntity<? super SignInResponseDto> signIn(SignInRequestDto dto);
}
