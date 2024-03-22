package com.example.joongomarket.controller;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.joongomarket.dto.request.post.PostCommentRequestDto;
import com.example.joongomarket.dto.request.post.PostRequestDto;
import com.example.joongomarket.dto.response.post.GetPostListResponseDto;
import com.example.joongomarket.dto.response.post.GetPostMyListResponseDto;
import com.example.joongomarket.dto.response.post.GetPostResponseDto;
import com.example.joongomarket.dto.response.post.PostCommentResponseDto;
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

    @GetMapping("/{postId}")
    public ResponseEntity<? super GetPostResponseDto> getPost(
        @PathVariable("postId") int postId
    ) {
        ResponseEntity<? super GetPostResponseDto> response = postService.getPost(postId);
        return response;
    }

    @GetMapping("/list")
    public ResponseEntity<? super List<GetPostListResponseDto>> getList() {
        ResponseEntity<? super List<GetPostListResponseDto>> response = postService.getList();
        return response;
    }

    @GetMapping("/my-list")
    public ResponseEntity<? super List<GetPostMyListResponseDto>> getMyList(
        @AuthenticationPrincipal String userId
    ) {
        ResponseEntity<? super List<GetPostMyListResponseDto>> response = postService.getMyList(userId);
        return response;
    }

    @PostMapping("/comment")
    public ResponseEntity<? super PostCommentResponseDto> postComment(
        @AuthenticationPrincipal String userId,
        @RequestBody @Valid PostCommentRequestDto requestBody
    ) {
        ResponseEntity<? super PostCommentResponseDto> response = postService.postComment(userId, requestBody);
        return response;
    }
}
