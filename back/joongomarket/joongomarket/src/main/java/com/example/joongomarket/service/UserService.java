package com.example.joongomarket.service;

import org.springframework.http.ResponseEntity;

import com.example.joongomarket.dto.response.user.GetUserResponseDto;

public interface UserService {
    ResponseEntity<? super GetUserResponseDto> getUser(String userId);
} 
