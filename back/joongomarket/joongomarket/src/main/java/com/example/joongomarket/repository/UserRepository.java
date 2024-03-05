package com.example.joongomarket.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.joongomarket.entity.UsersEntity;

@Repository
public interface UserRepository extends JpaRepository<UsersEntity, Integer> {
    UsersEntity findbuUserId(Integer userId);
    UsersEntity findByUserNicknname(String userNickname);
}
