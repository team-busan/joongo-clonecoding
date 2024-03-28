package com.example.joongomarket.service;

import java.util.List;

import org.springframework.http.ResponseEntity;

import com.example.joongomarket.dto.request.post.PostBookmarkReqeustDto;
import com.example.joongomarket.dto.request.post.PostCommentRequestDto;
import com.example.joongomarket.dto.request.post.PostRequestDto;
import com.example.joongomarket.dto.response.post.DeletePostResponseDto;
import com.example.joongomarket.dto.response.post.GetPostListResponseDto;
import com.example.joongomarket.dto.response.post.GetPostMyListResponseDto;
import com.example.joongomarket.dto.response.post.GetPostRandomCategoryResponseDto;
import com.example.joongomarket.dto.response.post.GetPostResponseDto;
import com.example.joongomarket.dto.response.post.GetPostTopListResponseDto;
import com.example.joongomarket.dto.response.post.PostBookmarkResponseDto;
import com.example.joongomarket.dto.response.post.PostCommentResponseDto;
import com.example.joongomarket.dto.response.post.PostResponseDto;

public interface PostService {
    ResponseEntity<? super PostResponseDto> post(PostRequestDto dto, String userId);
    ResponseEntity<? super GetPostResponseDto> getPost(int postId);
    ResponseEntity<? super List<GetPostListResponseDto>> getList();
    ResponseEntity<? super List<GetPostListResponseDto>> getList30();
    ResponseEntity<? super List<GetPostMyListResponseDto>> getMyList(String userId);
    ResponseEntity<? super PostCommentResponseDto> postComment(String userId, PostCommentRequestDto dto);
    ResponseEntity<? super PostBookmarkResponseDto> postBookmark(String userId, PostBookmarkReqeustDto dto);
    ResponseEntity<? super GetPostRandomCategoryResponseDto> getRandomPost();
    ResponseEntity<? super GetPostTopListResponseDto> getPostTop();
    ResponseEntity<? super DeletePostResponseDto> deletePost(String userId, int postId);
} 
