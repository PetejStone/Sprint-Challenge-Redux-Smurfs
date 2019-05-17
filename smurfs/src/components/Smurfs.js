import React, { Component } from 'react';
import {connect} from 'react-redux';
//import './App.css';
import {getSmurfs, deleteSmurf} from '../actions'

/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class Smurfs extends Component {
   
  deleteSmurf = id => {
    this.props.deleteSmurf(id)
  }

  render() {
    return (
      <div className="App">
        {this.props.smurfs.map(smurf => 
          <div>
            <h4>{smurf.name}</h4>
            <p>Age: {smurf.age}</p>
            <p>Height: {smurf.height}</p>
            <button onClick={ ()=> this.deleteSmurf(smurf.id) }>Delete Smurf</button>
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
  smurfs: state.smurfs
})

export default connect(mapStateToProps,
  {getSmurfs, deleteSmurf})
  (Smurfs);
