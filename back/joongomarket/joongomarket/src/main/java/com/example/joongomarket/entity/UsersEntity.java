package com.example.joongomarket.entity;

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
    private String userIntroduction;
    private String userCode;
}
