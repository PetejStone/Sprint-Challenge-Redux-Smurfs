import React, { Component } from 'react';
import './components.css';
import {addSmurf} from '../actions'
import {connect} from 'react-redux';
//import  './components.css/'

class AddSmurf extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurf: {
        name: '',
        age: '',
        height: ''
      }
    };
  }

  addSmurf = event => {
    event.preventDefault();
    // add code to create the smurf using the api
    this.props.addSmurf(this.state.smurf);
    // this.setState({
    //   name: '',
    //   age: '',
    //   height: ''
    // });
   document.getElementsByClassName('add')[0].value = ''
   document.getElementsByClassName('add')[1].value = ''
   document.getElementsByClassName('add')[2].value = ''
  }

  handleInputChange = e => {
    this.setState({
        smurf: {
          ...this.state.smurf,
       [e.target.name]: e.target.value,
       id: Math.floor(Math.random() * 999999999999999999)
        }
      }
       );
     if (e.target.name === 'height') {
        this.setState({
          smurf: {
            ...this.state.smurf,
            height: `${e.target.value}cm`
          }
        })
      }
  };

  render() {
  
    return (
      <div className="smurf-form-container">
        <form onSubmit={this.addSmurf} autoComplete="off" className="smurf-form" id="smurf-form">
        <input type="hidden" />
          <input
            className="add"
            onChange={this.handleInputChange}
            placeholder="name"
            value={this.state.name}
            name="name"
            type="text"
            required
          />
          <input
           className="add"
            onChange={this.handleInputChange}
            placeholder="age"
            value={this.state.age}
            name="age"
            type="number"
          />
          <input
            className="add"
            onChange={this.handleInputChange}
            placeholder="height (in cm)"
            value={this.state.height}
            name="height"
            type="number"
          />
          <button type="submit">Add to the village</button>
        </form>
      </div>
    );
  }
}

export default connect(null, {addSmurf})(AddSmurf);