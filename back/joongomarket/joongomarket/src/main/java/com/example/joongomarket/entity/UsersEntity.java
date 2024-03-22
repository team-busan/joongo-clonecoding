package com.example.joongomarket.entity;

import java.util.Random;

import com.example.joongomarket.dto.request.auth.SignUpRequestDto;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
@Entity(name = "user")
@Table(name = "user")
public class UsersEntity {
    @Id
    private String userId;
    private String userPassword;
    private String userEmail;
    private String userNickname;
    private String userProfile;
    private String userIntroducation;

    public UsersEntity(SignUpRequestDto dto) {
        this.userId = dto.getUserId();
        this.userPassword = dto.getUserPassword();
        this.userEmail = dto.getUserEmail();
        this.userNickname = generateRandomNickname();
        this.userProfile = getDefaultProfileUrl();
        this.userIntroducation = "한 줄 소개를 입력해 주세요.";
    }

    private String generateRandomNickname() {
        Random random = new Random();
        return "user" + String.format("%04d", random.nextInt(10000));
    }

    private String getDefaultProfileUrl() {
        return "/images/profile.jpg";
    }
}
