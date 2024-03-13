package com.example.joongomarket.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.joongomarket.entity.UsersEntity;

@Repository
public interface UserRepository extends JpaRepository<UsersEntity, String> {

    UsersEntity findByUserId(String userId);

    boolean existsByUserId(String userId);

    UsersEntity findByUserNickname(String userNickname);

    boolean existsByUserEmail(String userEmail);
}
