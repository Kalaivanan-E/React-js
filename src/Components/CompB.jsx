import React  from "react";

class CompB extends React.Component{

    render(){
        <div> Component B
        <hr />
        <pre> {JSON.stringify(this.props)}</pre>
        <h4> Employees Id : {this.eid}</h4>
        <h4> Employees Name : {this.ename}</h4>
        </div>

    }
}

export default CompB;