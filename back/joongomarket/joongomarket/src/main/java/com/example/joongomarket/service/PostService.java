package com.example.joongomarket.service;

import org.springframework.http.ResponseEntity;

import com.example.joongomarket.dto.request.post.PostRequestDto;
import com.example.joongomarket.dto.response.post.GetPostResponseDto;
import com.example.joongomarket.dto.response.post.PostResponseDto;

public interface PostService {
    ResponseEntity<? super PostResponseDto> post(PostRequestDto dto, String userId);
    ResponseEntity<? super GetPostResponseDto> getPost(int postId);
} 
