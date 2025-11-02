
// Props is a way to send data from one component to another
// how to read the a and ename
// we read a data using react expresssion
let Message = ()=>{
    let a = 10;
    let ename = "Kalai"
    return <div>
        <h1>Value :{a}</h1>
        <h1>Ename: {ename}</h1>
    </div>
}
export default Message;