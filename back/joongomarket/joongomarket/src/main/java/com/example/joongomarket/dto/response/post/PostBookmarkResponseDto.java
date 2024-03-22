package com.example.joongomarket.dto.response.post;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import com.example.joongomarket.common.ResponseCode;
import com.example.joongomarket.common.ResponseMessage;
import com.example.joongomarket.dto.response.ResponseDto;
import com.example.joongomarket.entity.BookmarkEntity;
import com.example.joongomarket.entity.PostsEntity;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class PostBookmarkResponseDto extends ResponseDto {

    private PostsEntity postsEntity;

    private List<BookmarkEntity> bookmarkList;

    private PostBookmarkResponseDto() {
        super();
    }

    public static ResponseEntity<PostBookmarkResponseDto> success(PostsEntity postsEntity, List<BookmarkEntity> bookmarkList) {
        PostBookmarkResponseDto responseBody = new PostBookmarkResponseDto();
        responseBody.setPostsEntity(postsEntity);
        responseBody.setBookmarkList(bookmarkList);
        return ResponseEntity.status(HttpStatus.OK).body(responseBody);
    }

    public static ResponseEntity<ResponseDto> existUser() {
        ResponseDto responseBody = new ResponseDto(ResponseCode.NOT_EXIST_USER, ResponseMessage.NOT_EXIST_USER);
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(responseBody);
    }

    public static ResponseEntity<ResponseDto> existPost() {
        ResponseDto responseBody = new ResponseDto(ResponseCode.NOT_EXIST_POST, ResponseMessage.NOT_EXIST_POST);
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(responseBody);
    }

    public static ResponseEntity<ResponseDto> postBookmarkFail() {
        ResponseDto responseBody = new ResponseDto(ResponseCode.DATABASE_ERROR, ResponseMessage.DATABASE_ERROR);
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(responseBody);
    }
}
