import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
// import { render } from '@testing-library/react';

const lower = "lower";
const upper = "upper";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {message:""};
  }

  converter(action){

    let message = this.state.message;

    switch(action){
      case lower:
        console.log("lower");
        
        message = message.toLowerCase();
        break;

      case upper:
        console.log("upper");

        message = message.toUpperCase();
        break;

      default:
        break;

    }

    this.setState({message});

  }

  render() {
    return (
      <div className="App">    
      
      <textarea onChange={(evt)=>{
        let message = evt.target.value;
        this.setState({message});
      }}
      className="textarea"
      value={this.state.message}
      />

        <div>
          <button onClick={()=>{this.converter(lower)}}>lowercase</button>
          <button onClick={()=> {this.converter(upper)}}>UPPERCASE</button>  
        </div>

      </div>
    );
  }
}

export default App;
