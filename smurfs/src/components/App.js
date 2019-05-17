import React, { Component } from 'react';
import {connect} from 'react-redux';
import './App.css';
import {getSmurfs} from '../actions'

/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
  render() {
    return (
      <div className="App">
        {this.props.smurfs}
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

export default connect(mapStateToProps,{getSmurfs})(App);
