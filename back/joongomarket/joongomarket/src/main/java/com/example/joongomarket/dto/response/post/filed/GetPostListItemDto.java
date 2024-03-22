package com.example.joongomarket.dto.response.post.filed;

import java.util.ArrayList;
import java.util.List;

import com.example.joongomarket.entity.PostsEntity;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class GetPostListItemDto {
    private int postId;
    private String mainUploadUrl;
    private String title;
    private String writeDateTime;
    private int price;

    public GetPostListItemDto(PostsEntity postsEntity) {
        this.postId = postsEntity.getPostId();
        this.mainUploadUrl = postsEntity.getMainUploadUrl();
        this.title = postsEntity.getTitle();
        this.writeDateTime = postsEntity.getWriteDateTime();
        this.price = postsEntity.getPrice();
    }

    public static List<GetPostListItemDto> copyList(List<PostsEntity> postEntityList) {
        List<GetPostListItemDto> list = new ArrayList<>();

        for (PostsEntity postsEntity : postEntityList) {
            GetPostListItemDto dto = new GetPostListItemDto(postsEntity);
            list.add(dto);
        }
        return list;
    }
}
