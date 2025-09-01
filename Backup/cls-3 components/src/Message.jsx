import { useState } from "react";

let Message = ()=>{

    let [msg, setMessage] = useState("Hello")

    let updateHandler = (Value)=>{

        setMessage(Value)

    }

    return <div>
        <h2> Message Component</h2>
        <h2> Message Value: {msg}</h2>
        <button onClick={updateHandler.bind(null,"Good Morning")}> GM</button>
        <button onClick={updateHandler.bind(null,"Good Afternoon")}> GA</button>
        <button onClick={updateHandler.bind(null,"Good Night")}> GN</button>
        <button onClick={()=>{setMessage("Good Evening")}}> GE</button>
    </div>
}

export default Message;