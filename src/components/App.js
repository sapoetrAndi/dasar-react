import React from "react";
import Header from "./Header";
import List from "./List";
import Button from "./Button";
import "../styles/App.css"



//untuk membuat component di react ada 2 cara
//1. menggunakan class
// class App extends React.Component{
//     state = {
//         book: "Chicken soup for the soul",
//         name: "kodekademia",
//         text: "",
//     }

//     click = () => {
//         this.setState({
//             name: this.state.text
//         })

//         this.setState({
//             text: ""
//         })
//     }

//     change = e => {
//         this.setState({
//             text: e.target.value
//         })
//     }

//     render(){
//         return(
//         <div>
//             <h1>{this.state.name}</h1>
//             <input type="text" value={this.state.text} onChange={this.change}/>
//             <button onClick={this.click}>click</button>
//             {/* <List test="test" book={this.state.book}/>
//             <Button color="biru"/> */}
//         </div>
//         )
//     }
// }

const App = () => {
    return(
        <div className="box">
            <h1 style={myStyle}>Hello World</h1>
        </div>
    )
}

const myStyle = {
    color: "blue",
    fontSize: "50px"
}

export default App;


//2. menggunakan function
// const App = () => {
//     return(
//         <div>
//             <h1>Halo Andi Saputra</h1>
//         </div>
//     )
// }

// export default App;

