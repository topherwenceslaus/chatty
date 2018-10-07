import React, {Component} from 'react'

class Timer extends Component{
    render(){
        return(
            <div>
                {this.props.time}
            </div>
        )
    }
}

export default Timer