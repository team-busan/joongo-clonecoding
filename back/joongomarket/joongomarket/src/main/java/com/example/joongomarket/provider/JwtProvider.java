package com.example.joongomarket.provider;

import java.nio.charset.StandardCharsets;
import java.security.Key;
import java.time.Instant;
import java.time.temporal.ChronoUnit;
import java.util.Date;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;

//제어역전 의존성 주입
@Component
public class JwtProvider {

    @Value("${secret-key}")
    private String secretKey;
    
    //user_id에 따른 토큰 제작
    public String create(String userId) {
        Date espiredDate = Date.from(Instant.now().plus(1, ChronoUnit.HOURS));
        //시크릿키 제작
        Key key = Keys.hmacShaKeyFor(secretKey.getBytes(StandardCharsets.UTF_8));

        String jwt = Jwts.builder()
            .signWith(key, SignatureAlgorithm.HS256)
            .setSubject(userId).setIssuedAt(new Date()).setExpiration(espiredDate)
            .compact();

        return jwt;
    }

    //jwt 검증
    public String validate(String jwt) {

        String subject = null;
        Key key = Keys.hmacShaKeyFor(secretKey.getBytes(StandardCharsets.UTF_8));

        try{
            subject = Jwts.parserBuilder()
                .setSigningKey(key)
                .build()
                .parseClaimsJws(jwt)
                .getBody()
                .getSubject();
                
        }catch(Exception exception){
            exception.printStackTrace();
            return null;
        }
        return subject;
    }
    
}