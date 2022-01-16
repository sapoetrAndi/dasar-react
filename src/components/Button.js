import React from "react"
import PropTypes from "prop-types"

class Button extends React.Component{
    
    change = () => {
        console.log("OK");
        this.setState({
            name: "andi saputra"
        })
    }

    render(){
        return(
        <div>
            <button onClick={this.change}>click</button>
        </div>
        )
    }
}

//cek proptypes / tipe data props
Button.propTypes = {
    color: PropTypes.string.isRequired
}

// default props apabila tidak ada props yang dikirim
Button.defaultProps = {
    color: "merah"
}

export default Button;

