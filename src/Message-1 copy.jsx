

import React from "react";

class Message extends React.Component{
    state;

    constructor(props){
        super(props)
        this.state ={
             Msg:'hello'
        }

    }

    gmHandler = ()=>{
        this.setState({ Msg : 'Good Morning'})
    }
    gaHandler = ()=>{
        this.setState({ Msg : 'Good Afternoon'})
    }
    gnHandler = ()=>{
        this.setState({ Msg : 'Good Night'})
    }


    render(){
        return <div>
            <h2> Message Components</h2>
            <h2>Message Value : {this.state.Msg}</h2>
            <button onClick={this.gmHandler}>Gm</button>
            <button onClick={this.gaHandler}>GA</button>
            <button onClick={this.gnHandler}>GN</button>
        </div>
    }
}

export default Message;