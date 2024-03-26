package com.example.joongomarket.dto.request.user;

import org.hibernate.validator.constraints.Length;

import jakarta.validation.constraints.NotBlank;
import lombok.Getter;

@Getter
public class ValidateNicknameRequestDto {
    @NotBlank
    @Length(max = 15)
    private String userNickname;
}
