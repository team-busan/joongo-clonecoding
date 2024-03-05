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
@Entity(name = "users")
@Table(name = "users")
public class UsersEntity {
    @Id
    private int userId;
    private String userNickname;
    private String userAge;
    private String userProfile;
    private String userIntroduction;
}
