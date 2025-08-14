

import React from "react";

class Message extends React.Component{

    msg = "Hello";

    gmHandler = ()=>{
        this.msg = 'Good Morning'
        console.log(this.msg)
        this.forceUpdate()
        
    }

    gnHandler = ()=>{
        this.msg = 'Good Night'
        console.log(this.msg)
        this.forceUpdate()
        
    }


    render(){
        return <div>
        <h2> Message Components</h2>
        <h3> Message: { this.msg}</h3>
        <button onClick={this.gmHandler}>Good Morning</button>   
        <button onClick={this.gnHandler}>Good Night</button>   

        </div>
    }
}

export default Message;