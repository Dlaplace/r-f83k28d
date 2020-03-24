import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state={
      content:0
    };
    this.handleClickadd=this.handleClickadd.bind(this);
    this.handleClicksub=this.handleClicksub.bind(this);
  }

  handleClickadd(){
    this.setState((prevState)=>({
      content: prevState.content + 1,
    }))};
  handleClicksub(){
    this.setState((prevState)=>({
      content: prevState.content - 1,
    }))};
  

  render() {
    return (
      <div>
        <span className="value">{this.state.content}</span>
        <button id="inc" onClick={this.handleClickadd}>Incrementa</button>
        <button id="inc" onClick={this.handleClicksub}>Disminuye</button>
      </div>
    );
  }


}

export default App;
