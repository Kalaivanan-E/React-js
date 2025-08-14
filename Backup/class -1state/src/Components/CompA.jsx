import CompB from "./CompB";





class CompA extends React.Component{

    emp_Id = 101;
    emp_Name = 'Rahul';
    emp_Details = {
        'emp_sal': 45000,
        'loc': ['New Delhi']
    }

    render(){ <div>
        <h2>  Component A</h2>
        <hr />
        <CompB eid = {this.emp_Id}
               ename= {this.emp_Name}
        />
        
    </div>

    }
}

export default CompA; 