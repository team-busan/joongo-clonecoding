package com.example.joongomarket.service.implement;

import java.util.List;
import java.util.Random;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.example.joongomarket.common.ResponseCode;
import com.example.joongomarket.common.ResponseMessage;
import com.example.joongomarket.dto.request.post.PostBookmarkReqeustDto;
import com.example.joongomarket.dto.request.post.PostCommentRequestDto;
import com.example.joongomarket.dto.request.post.PostRequestDto;
import com.example.joongomarket.dto.response.ResponseDto;
import com.example.joongomarket.dto.response.post.DeletePostResponseDto;
import com.example.joongomarket.dto.response.post.GetPostListResponseDto;
import com.example.joongomarket.dto.response.post.GetPostMyListResponseDto;
import com.example.joongomarket.dto.response.post.GetPostRandomCategoryResponseDto;
import com.example.joongomarket.dto.response.post.GetPostResponseDto;
import com.example.joongomarket.dto.response.post.GetPostTopListResponseDto;
import com.example.joongomarket.dto.response.post.PostBookmarkResponseDto;
import com.example.joongomarket.dto.response.post.PostCommentResponseDto;
import com.example.joongomarket.dto.response.post.PostResponseDto;
import com.example.joongomarket.dto.response.post.filed.GetPostListItemDto;
import com.example.joongomarket.entity.BookmarkEntity;
import com.example.joongomarket.entity.CommentEntity;
import com.example.joongomarket.entity.PostsEntity;
import com.example.joongomarket.entity.UsersEntity;
import com.example.joongomarket.repository.BookmarkRepository;
import com.example.joongomarket.repository.CommentRepository;
import com.example.joongomarket.repository.PostRepository;
import com.example.joongomarket.repository.UserRepository;
import com.example.joongomarket.service.PostService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class PostServiceImplement implements PostService {

    private final PostRepository postRepository;

    private final UserRepository userRepository;

    private final CommentRepository commentRepository;

    private final BookmarkRepository bookmarkRepository;

    //? 게시물 업로드
    @Override
    public ResponseEntity<? super PostResponseDto> post(PostRequestDto dto, String userId) {
        try {
            UsersEntity usersEntity = userRepository.findByUserId(userId);
            if(usersEntity != null) {
                PostsEntity postsEntity = new PostsEntity(dto, usersEntity);
                postRepository.save(postsEntity);
                return PostResponseDto.success();
            }else {
                return PostResponseDto.postFail();
            }
        } catch (Exception exception) {
            exception.printStackTrace();
            return ResponseDto.databaseError();
        }
    }

    //? 특정 게시물 가져오기
    @Override
    public ResponseEntity<? super GetPostResponseDto> getPost(int postId) {
        try{
            PostsEntity postsEntity = postRepository.findByPostId(postId);
            if(postsEntity == null) {
                return GetPostResponseDto.existPost();
            }else {
                List<CommentEntity> commentList = commentRepository.findByPostIdOrderByWriteDateTimeDesc(postId);
                List<BookmarkEntity> bookmarkList = bookmarkRepository.findByPostId(postId);
                return GetPostResponseDto.success(postsEntity, commentList, bookmarkList);
            }
        }catch(Exception exception){
            exception.printStackTrace();
            return ResponseDto.databaseError();
        }
        
    }

    //? 전체 게시물 리스트 가져오기
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

    //? 자신의 게시물 리스트 가져오기
    @Override
    public ResponseEntity<? super List<GetPostMyListResponseDto>> getMyList(String userId) {
        try {
            List<PostsEntity> postMyList = postRepository.findByUserIdOrderByWriteDateTimeDesc(userId);
            List<GetPostListItemDto> response = GetPostListItemDto.copyList(postMyList);
            return ResponseEntity.status(HttpStatus.OK).body(response);
        } catch (Exception exception) {
            exception.printStackTrace();

            ResponseDto errorResponse = new ResponseDto(ResponseCode.DATABASE_ERROR, ResponseMessage.DATABASE_ERROR);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(errorResponse);
        }
        
    }

    //? 댓글 요청 +반환
    @Override
    public ResponseEntity<? super PostCommentResponseDto> postComment(String userId, PostCommentRequestDto dto) {
        int postId = dto.getPostId();
        try {
            UsersEntity usersEntity = userRepository.findByUserId(userId);
            if(usersEntity == null) {
                return PostCommentResponseDto.existUser();
            }

            PostsEntity postsEntity = postRepository.findByPostId(postId);
            if(postsEntity == null) {
                return PostCommentResponseDto.existPost();
            }

            CommentEntity commentEntity = new CommentEntity(usersEntity, dto);
            commentRepository.save(commentEntity);

            List<CommentEntity> commentList = commentRepository.findByPostIdOrderByWriteDateTimeDesc(postId);

            return ResponseEntity.ok().body(PostCommentResponseDto.success(postsEntity, commentList));
        } catch (Exception exception) {
            exception.printStackTrace();
            return PostCommentResponseDto.postCommentFail();
        }
    }

    //? 북마크 기능
    @Override
    public ResponseEntity<? super PostBookmarkResponseDto> postBookmark(String userId, PostBookmarkReqeustDto dto) {
        int postId = dto.getPostId();
        try {
            UsersEntity usersEntity = userRepository.findByUserId(userId);
            if(usersEntity == null) {
                return PostBookmarkResponseDto.existUser();
            }
            PostsEntity postsEntity = postRepository.findByPostId(postId);
            if(postsEntity == null) {
                return PostBookmarkResponseDto.existPost();
            }

            BookmarkEntity bookmarkEntity = bookmarkRepository.findByUserIdAndPostId(userId, postId);
            if(bookmarkEntity == null) {
                bookmarkEntity = new BookmarkEntity(userId, postId);
                bookmarkRepository.save(bookmarkEntity);
            }else {
                bookmarkRepository.delete(bookmarkEntity);
            }

            List<BookmarkEntity> bookmarkList = bookmarkRepository.findByPostId(postId);

            return ResponseEntity.ok().body(PostBookmarkResponseDto.success(postsEntity, bookmarkList));
        } catch (Exception exception) {
            exception.printStackTrace();
            return PostBookmarkResponseDto.postBookmarkFail();
        }
    }
    
    //? 카테고리 랜덤(홈 화면에 쓰임)
    @Override
    public ResponseEntity<? super GetPostRandomCategoryResponseDto> getRandomPost() {
        try {
            String[] mainCategories = {"의류", "전자기기", "가구/인테리어", "리빙/생활", "반려동물/취미"};
            Random random = new Random();
            String randomCategory = mainCategories[random.nextInt(mainCategories.length)];

            List<PostsEntity> posts = postRepository.findTop30ByMainCategoryOrderByWriteDateTimeDesc(randomCategory);

            GetPostRandomCategoryResponseDto responseDto = new GetPostRandomCategoryResponseDto();
            responseDto.setPostList(posts);
            return GetPostRandomCategoryResponseDto.success(posts);
        } catch (Exception exception) {
            exception.printStackTrace();
            return GetPostRandomCategoryResponseDto.getPostRandomFail();
        }
    }

    //? 조회수 많은 게시물 리스트
    @Override
    public ResponseEntity<? super GetPostTopListResponseDto> getPostTop() {
        try {
            List<PostsEntity> posts = postRepository.findTop30ByOrderByViewCountDesc();
            GetPostTopListResponseDto response = new GetPostTopListResponseDto();
            response.setPostList(posts);
            return GetPostTopListResponseDto.success(posts);
        } catch (Exception exception) {
            exception.printStackTrace();
            return GetPostTopListResponseDto.databaseError();
        }
    }

    //? 최신순 30개 가져오기
    @Override
    public ResponseEntity<? super List<GetPostListResponseDto>> getList30() {
        try {
            List<PostsEntity> postList = postRepository.findTop30ByOrderByWriteDateTimeDesc();
        
            List<GetPostListItemDto> responseList = GetPostListItemDto.copyList(postList);
            
        return ResponseEntity.status(HttpStatus.OK).body(responseList);
        } catch (Exception exception) {
            exception.printStackTrace();
            GetPostListResponseDto.databaseError();

            ResponseDto errorResponse = new ResponseDto(ResponseCode.DATABASE_ERROR, ResponseMessage.DATABASE_ERROR);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(errorResponse);
        }
    }

    @Override
    public ResponseEntity<? super DeletePostResponseDto> deletePost(String userId, int postId) {
        try {
            PostsEntity postsEntity = postRepository.findByPostId(postId);
            if(postsEntity == null) {
                return DeletePostResponseDto.existPost();
            }

            boolean isEqualWriter = userId.equals(postsEntity.getUserId());
            if(!isEqualWriter) {
                return DeletePostResponseDto.existUser();
            }

            commentRepository.deleteByPostId(postId);
            bookmarkRepository.deleteByPostId(postId);

            postRepository.delete(postsEntity);
            return DeletePostResponseDto.success();
        } catch (Exception exception) {
            exception.printStackTrace();
            return ResponseDto.databaseError();
        }
    }

}
