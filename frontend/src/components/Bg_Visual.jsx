import React, { Component } from "react";
import '../css/NavCss.css';
import Image from "../img/bg_visual_1200.png";

class bg_visual_1200 extends Component {
    render() {
        return(
            <div class="visual_section" style={{backgroundImage: `url(${Image})`}}>
                <img class="main_visual" src={'/img/main_visual.png'}></img>
            </div>
        )
    }
}

export default bg_visual_1200;