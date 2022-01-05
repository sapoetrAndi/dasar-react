//import libraries
import React from "react";
import ReactDom from "react-dom";
import App from "./components/App"

//cara merender component react
ReactDom.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>,
    document.getElementById("root")
)
