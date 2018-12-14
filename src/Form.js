import React, { Component } from 'react'

export class form extends Component {
    constructor(props) {
        super(props);
        this.state = {
          name:'',gender:'',city:'',age:''
        };
      }
change = (e) =>{this.setState({[e.target.name]:e.target.value})}
submit = (e)=>{e.preventDefault();
    this.props.submit(this.state);
    this.setState({ name:'',gender:'',city:'',age:''})
     }
     
  render() {
    return (
      <div>
        <form onSubmit={this.submit}>
        <input type="text" name="name" value={this.state.name} onChange={this.change} placeholder='Name'></input><br/>
        <input type="text" name="gender" value={this.state.gender} onChange={this.change} placeholder='Gender' ></input><br/>
        <input type="text" name="city" value={this.state.city} onChange={this.change} placeholder='City'></input><br/>
        <input type="text" name="age" value={this.state.age} onChange={this.change} placeholder='Age'></input><br/>
        <button>Submit</button>
        </form>
      </div>
    )
  }
}

export default form;
