
let Employees = ()=>{
    let eidId = 101
    let ename = "Kalai"
    let esal = '25000'
    let details = {
        loc: "Theni",
        avail:true
    }
    return <div>
        <h2>Employees Details</h2>
        <h3>Employee ID:{eidId}</h3>
        <h3>Employee Name:{ename}</h3>
        <h3>Employee Salary:{esal}</h3>
        {/* <h3>Employee Details:{details}</h3>  */}
        {/* // we can't read the object directly in browser, so we can use JSON.stringify method */}
        <h3>Employee Salary: {JSON.stringify(details)}</h3>
    </div>
}
export default Employees;