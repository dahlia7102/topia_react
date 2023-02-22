import React, {useEffect, useState} from "react";
import axios from "axios";

const TestPage = () => {
    const [message, setMessege] = useState([]);
    
    useEffect( () => {
        axios.get('/testPage')
        // axios.get('https://jsonplaceholder.typicode.com/users')
            .then(res => {
                console.log(res.data);
                setMessege(res.data.message);
    
            }).catch(console.error);
        // await axios({
        //     method: 'get',
        //     header: { 'content-type': 'application/json' },
        //     url: 'http://localhost:8080/api/testPage',
        // })
        // .then(function (res) {
        //      console.log(res.data);
        //      setMessege(res.data.message);
        // })
        // .catch(function (err) {
        // console.log(err);
        // });

    },[]);


    return (
            <div>
                <br/>
                <br/>
                <br/>
                <h1>TEST PAGE</h1>
                message : {message}<br/>
            </div>
    )
}

export default TestPage;