package com.goodperson.backend.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.goodperson.backend.service.TestService;
import com.goodperson.backend.vo.TestVo;

@RestController
public class ApiController {

    @Autowired
    private TestService service;
    

    @GetMapping("/api/hello")
    public Map<String, Object> hello() {
        Map<String, Object> map = new HashMap<>();

        //test
        List<TestVo> test = service.selectList();
        System.out.println(test);

        map.put("data", test);
        map.put("message", "성공입니당");
        return map;
    }
}