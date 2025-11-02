
import { render } from "@testing-library/react";
import React from "react";

class Employee extends React.Component{

    eidId = 101
    ename = "Kalai"
    esal = '25000'
     details = {
        loc: "Theni",
        avail:true
    }
    render(){
    
        return <div>
            <h2>Employees Details</h2>
            <hr />
            <h4>Employee Eids: {this.eidId}</h4>
            <h3>Employee Name:{this.ename}</h3>
             <h3>Employee Salary: {JSON.stringify(this.details.loc)}</h3>


        </div>
    }
}
export default Employee