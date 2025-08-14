
import React, { Fragment, useState } from "react";

let Message = ()=>{

    let [msg,setMsg] = useState("Hello");

    let gmHandler = ()=>{
        setMsg("Good Morning")
    }
    let gnHandler = ()=>{
        setMsg("Good Night")
    }
    

    return <Fragment>
        <h2> Message Component</h2>
        <h3>Message value : {msg}</h3>
        <button onClick={gmHandler}>GM</button>
        <button onClick={gnHandler}>GN</button>
    </Fragment>
}

export default Message;