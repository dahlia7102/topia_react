import React, { Component } from "react";
import axios from 'axios';
class MainComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: ""
        }

        this.state = {
            data: ""
        }
    }

    componentDidMount() {
        this.getApi();
    }

    getApi = () => {
        axios.get("/api/hello")
            .then(res => {
                console.log(res.data.message);
                console.log(res.data);
                let dataArr = [];
                let testData = [];
                dataArr.push(res.data.message);

                this.setState({
                    message: res.data.message ,
                    data: res.data.data[0].COMMENTS 
                });
            }).catch(console.error);
    }

    render() {
        return (
            <div>
                Main 페이지<br />
                message : {this.state.message}<br/>
                Data : {this.state.data}
            </div>
        );
    }
}
export default MainComponent;