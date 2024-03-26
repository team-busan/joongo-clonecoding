package com.example.joongomarket.service.implement;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.example.joongomarket.dto.request.user.ValidateNicknameRequestDto;
import com.example.joongomarket.dto.response.ResponseDto;
import com.example.joongomarket.dto.response.user.GetUserResponseDto;
import com.example.joongomarket.dto.response.user.ValidateNicknameResponseDto;
import com.example.joongomarket.entity.UsersEntity;
import com.example.joongomarket.repository.UserRepository;
import com.example.joongomarket.service.UserService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class UserServiceImplement implements UserService {

    private final UserRepository userRepository;

    @Override
    public ResponseEntity<? super GetUserResponseDto> getUser(String userId) {
        try {
            UsersEntity usersEntity = userRepository.findByUserId(userId);
            if(usersEntity == null) {
                return GetUserResponseDto.getUserFail();
            }else {
                return GetUserResponseDto.success(usersEntity);
            }
        } catch (Exception exception) {
            exception.printStackTrace();
            return ResponseDto.databaseError();
        }
    }

    @Override
    public ResponseEntity<? super ValidateNicknameResponseDto> validateNickname(ValidateNicknameRequestDto dto) {
        String userNickname = dto.getUserNickname();
        try {
            boolean hasNickname = userRepository.existsByUserNickname(userNickname);
            if(!hasNickname) {
                return ValidateNicknameResponseDto.existNickname();
            }else {
                return ValidateNicknameResponseDto.success();
            }
        } catch (Exception exception) {
            exception.printStackTrace();
            return ResponseDto.databaseError();
        }
    }
}
