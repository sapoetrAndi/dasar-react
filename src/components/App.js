import React from "react";
import Header from "./Header";
import List from "./List";



//untuk membuat component di react ada 2 cara
//1. menggunakan class
class App extends React.Component{
    state = {
        book: "Chicken soup for the soul"
    }
    render(){
        return(
        <div>
            <List name="kodeakademia" test="test" book={this.state.book}>
                <h4>This is my list</h4>
                <p>oh my paragraph</p>
            </List>
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

