package com.example.joongomarket.service.implement;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.example.joongomarket.common.ResponseCode;
import com.example.joongomarket.common.ResponseMessage;
import com.example.joongomarket.dto.request.post.PostRequestDto;
import com.example.joongomarket.dto.response.ResponseDto;
import com.example.joongomarket.dto.response.post.GetPostListResponseDto;
import com.example.joongomarket.dto.response.post.GetPostResponseDto;
import com.example.joongomarket.dto.response.post.PostResponseDto;
import com.example.joongomarket.dto.response.post.filed.GetPostListItemDto;
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

    @Override
    public ResponseEntity<? super List<GetPostListResponseDto>> getList() {
        try {
        List<PostsEntity> postList = postRepository.findByOrderByWriteDateTimeDesc();
        
        // PostsEntity 목록을 GetPostListResponseDto 목록으로 변환
        List<GetPostListItemDto> responseList = GetPostListItemDto.copyList(postList);
        
        // 변환된 목록을 ResponseEntity에 담아 반환
        return ResponseEntity.status(HttpStatus.OK).body(responseList);
        } catch (Exception exception) {
            exception.printStackTrace();
            
            // 예외가 발생했을 때 적절한 응답 생성
            ResponseDto errorResponse = new ResponseDto(ResponseCode.DATABASE_ERROR, ResponseMessage.DATABASE_ERROR);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(errorResponse);
        }
    }
}
