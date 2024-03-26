package com.example.joongomarket.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.joongomarket.dto.request.user.ValidateNicknameRequestDto;
import com.example.joongomarket.dto.response.user.GetUserResponseDto;
import com.example.joongomarket.dto.response.user.ValidateNicknameResponseDto;
import com.example.joongomarket.service.UserService;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/user")
@RequiredArgsConstructor
public class UserController {
    private final UserService userService;

    @GetMapping("")
    public ResponseEntity<? super GetUserResponseDto> getUser(@AuthenticationPrincipal String userId) {
        ResponseEntity<? super GetUserResponseDto> response = userService.getUser(userId);
        return response;
    }

    @PostMapping("/validate-nickname")
    public ResponseEntity<? super ValidateNicknameResponseDto> validateNickname(
        @Valid @RequestBody ValidateNicknameRequestDto requestBody
    ) {
        ResponseEntity<? super ValidateNicknameResponseDto> response = userService.validateNickname(requestBody);
        return response;
    }
}
