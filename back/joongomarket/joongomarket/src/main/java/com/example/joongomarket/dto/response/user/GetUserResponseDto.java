package com.example.joongomarket.dto.response.user;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import com.example.joongomarket.common.ResponseCode;
import com.example.joongomarket.common.ResponseMessage;
import com.example.joongomarket.dto.response.ResponseDto;
import com.example.joongomarket.entity.UsersEntity;

import lombok.Getter;

@Getter
public class GetUserResponseDto extends ResponseDto{
    private String userId;
    private String userNickname;
    private String userProfile;
    private String userIntroduction;

    private GetUserResponseDto(UsersEntity usersEntity) {
        super();
        this.userId = usersEntity.getUserId();
        this.userNickname = usersEntity.getUserNickname();
        this.userProfile = usersEntity.getUserProfile();
        this.userIntroduction = usersEntity.getUserIntroducation();
    }

    public static ResponseEntity<GetUserResponseDto> success(UsersEntity usersEntity) {
        GetUserResponseDto responseBody = new GetUserResponseDto(usersEntity);
        return ResponseEntity.status(HttpStatus.OK).body(responseBody);
    }

    public static ResponseEntity<ResponseDto> getUserFail() {
        ResponseDto responseBody = new ResponseDto(ResponseCode.DATABASE_ERROR, ResponseMessage.DATABASE_ERROR);
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(responseBody);
    }

}
