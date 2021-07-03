import React, { Component } from 'react';
import {connect} from 'react-redux';
//import './App.css';
import {getSmurfs, deleteSmurf, editSmurf, submitChanges} from '../actions'
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
      activeSmurf: '',
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

  editSmurf = (e, smurf) => {
    this.setState({activeSmurf: smurf.id});

   if (smurf.id === this.state.activeSmurf) {
    this.props.editSmurf(smurf.id)
    this.setState({
      smurf: {
        ...this.state.smurf,
        name: e.target.parentNode.getAttribute('name'),
        height: e.target.parentNode.getAttribute('height'),
        age: e.target.parentNode.getAttribute('age'),
        id: e.target.parentNode.getAttribute('id'),
      }
    });
  }

    console.log( this.state.activeSmurf )
  }

  submitChanges = event => {
    event.preventDefault();
    // add code to create the smurf using the api
    // this.submitChanges(this.state.smurf);
    //  console.log(this.state.smurf)
    // this.setState({
    //   height: `${this.state.smurf.height}cm`
    // });
    
        // this.setState({
        //   smurf: {
        //     ...this.state.smurf,
        //     height: `${this.state.smurf.height}cm`
        //   }
        // })
      
    this.props.submitChanges(this.state.smurf);
    this.setState({
      changeActivated: false,
      activeSmurf: ''
    })
    //this.setState({changeActivated: false})
  }


  handleInputChange = (e)=> {
    this.setState({changeActivated: true})
    //e.target.setAttribute('value', e.target.value)
    this.setState({
      smurf: {
        ...this.state.smurf,
        [e.target.name] : e.target.value,
        id: e.target.parentNode.getAttribute('id')
      }
    })
        
    if (e.target.name === 'height') {
      this.setState({
        smurf: {
          ...this.state.smurf,
          height: `${e.target.value}cm`
        }
      })
    }
    // this.setState({
    //   smurf: {
    //     ...this.state.smurf,
    //     height: `${e.target.value}cm`,
    //   id: e.target.parentNode.getAttribute('id')
    //   }
    // })
    
    
    

    //this.submitChanges(e, smurf)
    
  
   //e.target.setAttribute('value', e.target.value)
  //console.log( e.target.parentNode.getAttribute('height'))
   
   
  //  this.setState({
  //   smurf: {
  //     ...this.state.smurf,
  //  [e.target.name]: e.target.value,
  //  id: e.target.parentNode.getAttribute('id')
  //   }
  // });
 
  //   this.setState({
  //     smurf: {
  //       ...this.state.smurf,
  //       height: `${e.target.value}cm`
  //     }
  //   })
      
  };

  render() {
    return (
      <div className="App smurfs">
        {this.props.smurfs.map(smurf => 
          
          <div >
          {this.props.updatingSmurf === false && smurf.id !== this.state.activeSmurf ? 
            <div className="smurf" id={smurf.id} age={smurf.age} height={smurf.height} name={smurf.name}>
              <h4>{smurf.name}</h4>
              <p>Age: {smurf.age}</p>
              <p>Height: {smurf.height}</p>
              <button onClick={ ()=> this.deleteSmurf(smurf.id) }>Delete Smurf</button>
              <button onClick={ (e)=> this.editSmurf(e,smurf) } >Edit Smurf</button>
            </div>
            : 
            <form onSubmit={this.submitChanges} autoComplete="off" className="edit-form" id={smurf.id} age={smurf.age} height={smurf.height} name={smurf.name}>
              <input type="text" name="name" 
                value={!this.state.changeActivated ? smurf.name : null} 
                onChange={this.handleInputChange}/>

              <input type="number"  name="age"
                value={!this.state.changeActivated ? smurf.age : null} 
                onChange={this.handleInputChange} />
              <input type="number" name="height" 
                value={!this.state.changeActivated ? smurf.height.replace('cm','') : null}  
                onChange={this.handleInputChange}/>
              <button >Submit Changes</button>
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
  {getSmurfs, deleteSmurf, editSmurf,submitChanges})
  (Smurfs);
