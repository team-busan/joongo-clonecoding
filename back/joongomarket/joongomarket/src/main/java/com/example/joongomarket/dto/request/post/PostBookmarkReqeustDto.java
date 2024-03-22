package com.example.joongomarket.dto.request.post;

import jakarta.validation.constraints.Min;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class PostBookmarkReqeustDto {
    @Min(1)
    private int postId;
}
