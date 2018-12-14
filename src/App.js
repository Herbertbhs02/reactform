import React, { Component } from 'react';
import './App.css';
import Form from './Form';

class App extends Component {
  constructor() {
    super();
    this.state = {
      user:{}
    };
  }
submitted = (user)=>{this.setState({user});}

  render() {
    return (
      <div className="App">
  <h1>Form example</h1>
       
       <Form submit={user =>this.submitted(user)}/>
         {this.state.user.name}<br/>
         {this.state.user.gender}<br/>
         {this.state.user.city}<br/>
         {this.state.user.age}
      </div>
    );
  }
}

export default App;
