import React from "react";
import ListItem from "./ListItem";

class List extends React.Component{
    render(){
        return(
            <div>
                <h3>{this.props.name}</h3>
                <h4>{this.props.book}</h4>
                <p>{this.props.test}</p>
                <ListItem/>
            </div>
        )
    }
}

export default List;