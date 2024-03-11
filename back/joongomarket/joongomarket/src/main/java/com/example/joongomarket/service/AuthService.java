package com.example.joongomarket.service;

import org.springframework.http.ResponseEntity;

import com.example.joongomarket.dto.request.auth.EmailCertificationRequestDto;
import com.example.joongomarket.dto.request.auth.IdCheckRequestDto;
import com.example.joongomarket.dto.response.auth.EmailCertificationResponseDto;
import com.example.joongomarket.dto.response.auth.IdCheckResponseDto;

public interface AuthService {
    ResponseEntity<? super IdCheckResponseDto> idCheck(IdCheckRequestDto dto);
    
    ResponseEntity<? super EmailCertificationResponseDto> emailCertification(EmailCertificationRequestDto dto);
}
