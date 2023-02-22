package com.goodperson.backend.controller;

import java.util.Map;
import java.util.HashMap;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.goodperson.backend.service.TestService;

@RestController
public class TestController {
    @Autowired
    TestService service;
    
    @GetMapping("/testPage")
    public Map<String, Object> test() {
        Map<String, Object> req = new HashMap<String, Object>();
        Map<String, Object> reqMap = new HashMap<String, Object>();

        req.put("data", service.selectList());
        req.put("message", "성공");

        return req;
			

    }
}
