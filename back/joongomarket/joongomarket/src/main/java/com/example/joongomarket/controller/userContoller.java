package com.example.joongomarket.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;


@RestController
@RequestMapping("/user")
public class userContoller {
    //test
    @GetMapping("/aa")
    public String aa() {
        return "aa";
    }
    
}
