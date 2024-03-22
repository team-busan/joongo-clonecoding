package com.example.joongomarket.dto.request.post;

import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class PostCommentRequestDto {
    @Min(1)
    private int postId;
    @NotBlank
    private String commentContent;
}
