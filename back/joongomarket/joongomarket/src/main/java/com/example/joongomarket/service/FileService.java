package com.example.joongomarket.service;

import org.springframework.core.io.Resource;
import org.springframework.web.multipart.MultipartFile;

public interface FileService {
    public String upload(MultipartFile file);
    public Resource getFile(String fileName);
}
