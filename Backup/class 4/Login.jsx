import { useState } from "react";
let Login = ()=>{
    let [user,setUser]=useState({"email":"","password":""})
    let emailHandle=(event)=>{
    /*   console.log(event.target.value) */
        setUser({...user,"email":event.target.value})
    }
    let pwdHandler = (event)=>{
        setUser({...user,'password':event.target.value})
    }
    return <div><pre>{JSON.stringify(user)}</pre>
                <h5>Login Details</h5>
                <form >
                EmailId:::: : <input type="text" onChange={emailHandle} />   <br /><br />
                Password : <input type="text" onChange={pwdHandler} />  <br/>
                <input type="submit" value="Login" />
                </form>
            </div>
}
export default Login;