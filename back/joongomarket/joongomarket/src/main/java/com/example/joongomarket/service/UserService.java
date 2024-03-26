package com.example.joongomarket.service;

import org.springframework.http.ResponseEntity;

import com.example.joongomarket.dto.request.user.ValidateNicknameRequestDto;
import com.example.joongomarket.dto.response.user.GetUserResponseDto;
import com.example.joongomarket.dto.response.user.ValidateNicknameResponseDto;

public interface UserService {
    ResponseEntity<? super GetUserResponseDto> getUser(String userId);
    ResponseEntity<? super ValidateNicknameResponseDto> validateNickname(ValidateNicknameRequestDto dto);
} 
