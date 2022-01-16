import React from "react";
import Header from "./Header";
import List from "./List";
import Button from "./Button";



//untuk membuat component di react ada 2 cara
//1. menggunakan class
class App extends React.Component{
    state = {
        book: "Chicken soup for the soul",
        name: "kodekademia"
    }

    change = () => {
        console.log("OK");
        this.setState({
            name: "andi saputra"
        })
    }

    render(){
        return(
        <div>
            <h1>{this.state.name}</h1>
            <button onClick={this.change}>click</button>
            {/* <List test="test" book={this.state.book}/>
            <Button color="biru"/> */}
        </div>
        )
    }
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

