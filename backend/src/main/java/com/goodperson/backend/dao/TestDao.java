package com.goodperson.backend.dao;

import java.util.List;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.goodperson.backend.vo.TestVo;

@Repository
public class TestDao {
    @Autowired
	private SqlSessionTemplate sqlSession;
	
	public List<TestVo> selectList() {
		System.out.println("다오 시부럴");
		return sqlSession.selectList("testMapper.comList");
	}
	
}
