import React from "react";



//untuk membuat component di react ada 2 cara
//1. menggunakan class
// class App extends React.Component{
//     render(){
//         return(
//             <div>
//                 <h1>Halo Andi Saputra</h1>
//             </div>
//         )
//     }
// }

// export default App;


//2. menggunakan function
const App = () => {
    return(
        <div>
            <h1>Halo Andi Saputra</h1>
        </div>
    )
}

export default App;