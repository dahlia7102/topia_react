package com.goodperson.backend.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class TestController {
    
    @GetMapping("/testPage")
    public String Test() {
        System.out.println("check test");
        return "testPage";
    }
}
