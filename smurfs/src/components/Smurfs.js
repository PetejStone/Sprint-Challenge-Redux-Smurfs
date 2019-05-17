import React, { Component } from 'react';
import {connect} from 'react-redux';
//import './App.css';
import {getSmurfs, deleteSmurf, editSmurf} from '../actions'
import './components.css'
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class Smurfs extends Component {
  constructor() {
    super();
    this.state = {
      changeActivated: false,
      smurf: {
        name: '',
        age: '',
        height: ''
      }
    }
  }
   
  deleteSmurf = id => {
    this.props.deleteSmurf(id)
  }

  editSmurf = id => {
    this.props.editSmurf(id)
  }

  submitChanges = (e, id) => {
    e.preventDefault();
    // add code to create the smurf using the api
    
     console.log(this.state.smurf)
    // this.setState({
    //   height: `${this.state.smurf.height}cm`
    // });
    
        // this.setState({
        //   smurf: {
        //     ...this.state.smurf,
        //     height: `${this.state.smurf.height}cm`
        //   }
        // })
      
    //this.props.submitChanges(this.state.smurf);
    //this.setState({changeActivated: false})
  }


  handleInputChange = e => {
    this.setState({changeActivated: true})
   e.target.setAttribute('value', e.target.value)
   
  //  this.setState({
  //   smurf: {
  //     ...this.state.smurf,
  //  [e.target.name]: e.target.value 
  //   }
  // }
  //  );
 
    this.setState({
      smurf: {
        ...this.state.smurf,
        name: e.target.value,
        age: e.target.value,
        height: `${e.target.value}cm`,
        id: ''
      }
    })
      
  };

  render() {
    return (
      <div className="App">
        {this.props.smurfs.map(smurf => 
          
          <div>
          {this.props.updatingSmurf === false ? 
            <div className="smurf">
              <h4>{smurf.name}</h4>
              <p>Age: {smurf.age}</p>
              <p>Height: {smurf.height}</p>
              <button onClick={ ()=> this.deleteSmurf(smurf.id) }>Delete Smurf</button>
              <button onClick={ ()=> this.editSmurf(smurf.id) }>Edit Smurf</button>
            </div>
            : 
            <form className="edit-form">
              <input type="text" name="name" 
                value={!this.state.changeActivated ? smurf.name : null} 
                onChange={this.handleInputChange}/>

              <input type="number"  name="age"
                value={!this.state.changeActivated ? smurf.age : null} 
                onChange={this.handleInputChange} />
              <input type="number" name="number" 
                value={!this.state.changeActivated ? smurf.height.replace('cm','') : null}  
                onChange={this.handleInputChange}/>
              <button onClick={ (e)=> this.submitChanges(e,smurf.id) }>Submit Changes</button>
            </form>
          }
          </div> 
       
        )}
      </div>
    );
  }

  componentDidMount() {
    this.props.getSmurfs()
  }
}

const mapStateToProps = state => ({
  smurfs: state.smurfs,
  updatingSmurf: state.updatingSmurf
})

export default connect(mapStateToProps,
  {getSmurfs, deleteSmurf, editSmurf})
  (Smurfs);
