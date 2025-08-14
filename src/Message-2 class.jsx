

import React from "react";

class Message extends React.Component{
    state;

    constructor(props){
        super(props)
        this.state ={
             Msg:'hello'
        }

    }

    updateHandler = (Value)=>{
        this.setState({
            Msg: Value
        })
    }
    


    render(){
        return <div>
            <h2> Message Components</h2>
            <h2>Message Value : {this.state.Msg}</h2>
            <button onClick={this.updateHandler.bind(this,"Good Morning")}>Gm</button>
            <button onClick={this.updateHandler.bind(this,'Good Afternoon')}>GA</button>
            <button onClick={this.updateHandler.bind(this,'Good Night')}>GN</button>
        </div>
    }
}

export default Message;