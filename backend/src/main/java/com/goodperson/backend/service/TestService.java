package com.goodperson.backend.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.goodperson.backend.dao.TestDao;
import com.goodperson.backend.vo.TestVo;

@Service
public class TestService {
    
    @Autowired
    private TestDao dao;

    public List<TestVo> selectList() {
      System.out.println("서비스 시부럴");
		return dao.selectList();
	}
    
}
