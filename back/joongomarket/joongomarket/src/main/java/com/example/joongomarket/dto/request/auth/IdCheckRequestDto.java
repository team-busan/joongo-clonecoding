package com.example.joongomarket.dto.request.auth;

import jakarta.validation.constraints.NotBlank;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@Data
public class IdCheckRequestDto {
    @NotBlank
    private String id;
}
