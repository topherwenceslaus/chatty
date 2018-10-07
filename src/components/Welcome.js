import React, { Component } from "react";

class Welcome extends Component{
    onChange= ()=>{
        let value = this.inn.value
        this.props.onChange(value)
    }

    render(){
            return(
                <div>
                    <input placeholder="Enter your username to chat" ref={el => this.inn = el} required></input>
                    <button onClick={this.onChange}>Start</button>
                </div>
            )
        }
}

export default Welcome