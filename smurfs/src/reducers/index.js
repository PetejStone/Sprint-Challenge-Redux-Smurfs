/*
  Be sure to import in all of the action types from `../actions`
*/

import {
  GET_SMURF from '../actions'
}

 //Your initial/default state for this project could *Although does not have to* look a lot like this
 
 const initialState = {
   smurfs: [],
   fetchingSmurfs: false,
   addingSmurf: false,
   updatingSmurf: false,
   deletingSmurf: false,
   error: null
 }


export const rootReducer = (state=initialState, action) => {
  return state;
}
