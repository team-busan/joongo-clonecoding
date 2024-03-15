package com.example.joongomarket.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.joongomarket.dto.request.post.PostRequestDto;
import com.example.joongomarket.dto.response.post.PostResponseDto;
import com.example.joongomarket.service.PostService;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/post")
@RequiredArgsConstructor
public class PostController {

    private final PostService postService;

    @PostMapping("")
    public ResponseEntity<? super PostResponseDto> post(
        @AuthenticationPrincipal String userId,
        @RequestBody @Valid PostRequestDto requestBody
    ) {
        ResponseEntity<? super PostResponseDto> response = postService.post(requestBody, userId);
        return response;
    }
}
