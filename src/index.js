// React app-main file
// write js script to update index.html div element

// ReactDOM("what you want to render","Where you want to render")


import ReactDOM from 'react-dom/client'


let root = ReactDOM.createRoot(document.getElementById('rajini'))

root.render("GM")

root.render(<h1> Good morning</h1>)


root.render(<div> <h1>Good Afternoon</h1> <h1> Good night</h1></div>)

