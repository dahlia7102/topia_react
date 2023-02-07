package com.goodperson.backend.vo;

public class TestVo {
    private String COMMENTS_NUM;
	private String COMMENTS;
	private String WRITER;
	private String REG_DATE;
	private String CONTENTS_NUM;
	private String PARENT_COMMENTS_NUM;
	private char DELETE_AT;
	private String COMMENTS_LEVEL;
	public String getCOMMENTS_NUM() {
		return COMMENTS_NUM;
	}
	public String getCOMMENTS() {
		System.out.println("브이오 시부럴");
		return COMMENTS;
	}
	public String getWRITER() {
		return WRITER;
	}
	public String getREG_DATE() {
		return REG_DATE;
	}
	public String getCONTENTS_NUM() {
		return CONTENTS_NUM;
	}
	public String getPARENT_COMMENTS_NUM() {
		return PARENT_COMMENTS_NUM;
	}
	public char getDELETE_AT() {
		return DELETE_AT;
	}
	public String getCOMMENTS_LEVEL() {
		return COMMENTS_LEVEL;
	}
	public void setCOMMENTS_NUM(String cOMMENTS_NUM) {
		COMMENTS_NUM = cOMMENTS_NUM;
	}
	public void setCOMMENTS(String cOMMENTS) {
		COMMENTS = cOMMENTS;
	}
	public void setWRITER(String wRITER) {
		WRITER = wRITER;
	}
	public void setCONTENTS_NUM(String cONTENTS_NUM) {
		CONTENTS_NUM = cONTENTS_NUM;
	}
	public void setPARENT_COMMENTS_NUM(String pARENT_COMMENTS_NUM) {
		PARENT_COMMENTS_NUM = pARENT_COMMENTS_NUM;
	}
	public void setDELETE_AT(char dELETE_AT) {
		DELETE_AT = dELETE_AT;
	}
	public void setCOMMENTS_LEVEL(String cOMMENTS_LEVEL) {
		COMMENTS_LEVEL = cOMMENTS_LEVEL;
	}
}
