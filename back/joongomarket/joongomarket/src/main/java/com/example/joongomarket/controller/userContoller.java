package com.example.joongomarket.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.joongomarket.dto.response.user.GetUserResponseDto;
import com.example.joongomarket.service.UserService;

import lombok.RequiredArgsConstructor;

import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.GetMapping;


@RestController
@RequestMapping("/user")
@RequiredArgsConstructor
public class UserContoller {

    private final UserService userService;

    @GetMapping("")
    public ResponseEntity<? super GetUserResponseDto> getUser(@AuthenticationPrincipal String userId) {
        ResponseEntity<? super GetUserResponseDto> response = userService.getUser(userId);
        return response;
    }
}
