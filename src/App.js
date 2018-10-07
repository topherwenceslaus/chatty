import React, { Component } from 'react';
import openSocket from 'socket.io-client'
import Welcome from './components/Welcome'
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state={
        username: '',
        msg: []
    }
    this.socket = openSocket('http://localhost:8080');
  }

  onChange = (value)=>{
      this.socket.emit("newchat", value)
  }

  static eventmsg(msg){
      this.setState({
        msg: this.state.msg.concat(msg)
    })
  }

  send=()=>{
      let chatText = this.chat.value
      this.socket.emit("msg", chatText)
  }

  render() {
    if(this.state.username){
        return (<div>
          <p>hello {this.state.username}</p>
          <input ref={el => this.chat =  el}></input>
          <button onClick={this.send}>Send</button>
          <div>
          {this.state.msg.map((msg,i)=>{
                return <p key={i}>{msg.username}: {msg.msg}</p>
          })}
          </div>
          
          </div>)
    }
    return ( 
      <div className="App">
            <Welcome onChange={this.onChange}/>
      </div>
    );
  }

  componentDidMount(){
    this.socket.on("welcome",(data)=>{
        this.setState({
          username: data.username
        })
    })

    this.socket.on("msgrec", (data)=>{
        this.setState({
          msg: this.state.msg.concat(data)
        })
    })
  }


}

export default App;
