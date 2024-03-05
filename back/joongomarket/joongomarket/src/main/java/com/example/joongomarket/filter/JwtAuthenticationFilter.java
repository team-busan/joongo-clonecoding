package com.example.joongomarket.filter;

import java.io.IOException;

import org.springframework.security.authentication.AbstractAuthenticationToken;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.util.StringUtils;
import org.springframework.web.filter.OncePerRequestFilter;

import com.example.joongomarket.entity.UsersEntity;
import com.example.joongomarket.provider.JwtProvider;
import com.example.joongomarket.repository.UserRepository;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;

@Component
@RequiredArgsConstructor
public class JwtAuthenticationFilter extends OncePerRequestFilter {

    private final UserRepository userRepository;
    private final JwtProvider jwtProvider;

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
            throws ServletException, IOException {

            try{

                String token = parseBearerToken(request);
                if(token == null) {
                    filterChain.doFilter(request, response);
                    return;
                }

                String userNickname = jwtProvider.validate(token);
                if(userNickname == null) {
                    filterChain.doFilter(request, response);
                    return;
                }

                UsersEntity usersEntity = userRepository.findByUserNicknname(userNickname);
                String nickName = usersEntity.getUserNickname();

                SecurityContext securityContext = SecurityContextHolder.createEmptyContext();

                AbstractAuthenticationToken authenticationToken = new UsernamePasswordAuthenticationToken(nickName, null);

                authenticationToken.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));

                securityContext.setAuthentication(authenticationToken);
                SecurityContextHolder.setContext(securityContext);

            }catch(Exception exception) {
                exception.printStackTrace();
            }

            filterChain.doFilter(request, response);

    }

    private String parseBearerToken(HttpServletRequest request) {

        String authorization = request.getHeader("Authorization");

        boolean hasAuthorization = StringUtils.hasText(authorization);
        if(!hasAuthorization) return null;

        boolean isBearer = authorization.startsWith("Bearer ");
        if(!isBearer) return null;

        String token = authorization.substring(7);
        return token;

    }

}
