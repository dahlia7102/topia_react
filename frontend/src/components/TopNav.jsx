import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import '../css/NavCss.css';
import '../css/ExCss.css';

function TopNav() {
     
        return (
                <div id="header">
                    <div class="nav">
                        <Link to={"/"}>
                            <img class="logo" src={'./img/h1_logo.png'}></img>
                        </Link>

                        <div>
                        <ul class="gnb">
                            <Link class="pwd" to={"/"}>회원가입</Link>
                            <Link class="id" to={"/"}>로그인</Link>
                        </ul>
                        <ul id="topnav">
                            <li >
                                <a href="#" >가이드</a>
                                <div class="depth2">
                                    <ul class="menu001">
                                        <li><Link to="/testPage">박혁진</Link></li>
                                        <li><a href="#" onclick="viewRpt('조준희')">조준희</a></li>
                                        <li><a href="#" onclick="viewRpt('정봉현')">정봉현</a></li>
                                    </ul>
                                </div>
                            </li>
                            <li>
                                <a href="#" >테스트중</a>
                                <div class="depth2">
                                    <ul class="menu002">
                                        <li><a href="#" onclick="viewRpt('신용주')">신용주</a></li>
                                        <li><a href="#" onclick="viewRpt('안재훈')">안재훈</a></li>
                                        <li><a href="#" onclick="viewRpt('김경욱')">김경욱</a></li>
                                    </ul>
                                </div>
                            </li>
                            <li>
                                <a href="#" >글자네개</a>
                                <div class="depth2">
                                    <ul class="menu003">
                                        <li><a href="#" onclick="viewRpt('박정수')">박정수</a></li>
                                        <li><a href="#" onclick="viewRpt('이창희')">이창희</a></li>
                                        <li><a href="#" onclick="viewRpt('유승규')">유승규</a></li>
                                        <li><a href="#" onclick="viewRpt('윤완상')">윤완상</a></li>
                                        <li><a href="#" onclick="viewRpt('오민규')">오민규</a></li>
                                    </ul>
                                </div>
                            </li>
                            <li >
                                <a href="#" >다섯개글자</a>
                                <div class="depth2">
                                    <ul class="menu004">
                                        <li><a href="#" onclick="viewRpt('윤인용')">윤인용</a></li>
                                        <li><a href="#" onclick="viewRpt('김현우')">김현우</a></li>
                                        <li><a href="#" onclick="viewRpt('송철민')">송철민</a></li>
                                        <li><a href="#" onclick="viewRpt('박범석')">박범석</a></li>
                                        <li><a href="#" onclick="viewRpt('전하형')">전하형</a></li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                        </div>
                    </div>
                </div>
        )
}

export default TopNav;