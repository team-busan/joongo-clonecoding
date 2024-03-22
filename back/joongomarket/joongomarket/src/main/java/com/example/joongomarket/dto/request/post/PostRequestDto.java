package com.example.joongomarket.dto.request.post;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class PostRequestDto {
    @NotBlank
    private String mainUploadUrl;

    private String subUploadUrl;

    @NotBlank
    private String title;

    @NotBlank
    private String content;

    private Integer price;

    @NotBlank
    private String mainCategory;

    private String subCategory;

    @NotBlank
    private String productStatus;

    @NotNull
    private int type;

    @NotNull
    private int salesStatus;

    // @NotBlank
    // private String userId;

    // @NotBlank
    // private String userNickname;

    // @NotBlank
    // private String userProfile;
}
