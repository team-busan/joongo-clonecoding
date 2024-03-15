package com.example.joongomarket.service.implement;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.example.joongomarket.dto.request.post.PostRequestDto;
import com.example.joongomarket.dto.response.ResponseDto;
import com.example.joongomarket.dto.response.post.GetPostResponseDto;
import com.example.joongomarket.dto.response.post.PostResponseDto;
import com.example.joongomarket.entity.PostsEntity;
import com.example.joongomarket.entity.UsersEntity;
import com.example.joongomarket.repository.PostRepository;
import com.example.joongomarket.repository.UserRepository;
import com.example.joongomarket.service.PostService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class PostServiceImplement implements PostService {

    private final PostRepository postRepository;

    private final UserRepository userRepository;

    @Override
    public ResponseEntity<? super PostResponseDto> post(PostRequestDto dto, String userId) {
        try {
            UsersEntity usersEntity = userRepository.findByUserId(userId);
            if(usersEntity != null) {
                PostsEntity postsEntity = new PostsEntity(dto, usersEntity);
                postRepository.save(postsEntity);
            }else {
                PostResponseDto.postFail();
            }
        } catch (Exception exception) {
            exception.printStackTrace();
            return ResponseDto.databaseError();
        }
        return PostResponseDto.success();
    }

    @Override
    public ResponseEntity<? super GetPostResponseDto> getPost(int postId) {
        try{
            PostsEntity postsEntity = postRepository.findByPostId(postId);
            if(postsEntity == null) {
                return GetPostResponseDto.existPost();
            }else {
                // poseEntity 안의 데이터를 가져오는 방법
                return GetPostResponseDto.success(postsEntity);
            }
        }catch(Exception exception){
            exception.printStackTrace();
            return ResponseDto.databaseError();
        }
        
    }
}
