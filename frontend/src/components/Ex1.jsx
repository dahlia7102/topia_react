import React, {useState} from "react";
import { BrowserRouter as Router, NavLink } from "react-router-dom";
import '../css/ExCss.css';

import TopMenuNav from "./TopMenuNav";

const Ex1 = () => {

    // const [text, setText] = useState("");
    return (
        <Router>
            <div class="test">
                <NavLink class="pwd" to={"/"}>회원가입</NavLink>
                <NavLink class="id" to={"/"}>로그인</NavLink>

                {/* <input id="text" type="text"  value={text} onChange={(e) => {
                    setText(e.target.value);
                }}/> */}
            </div>
            <TopMenuNav/>
        </Router>
    )
}

export default Ex1;

