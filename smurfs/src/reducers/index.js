/*
  Be sure to import in all of the action types from `../actions`
*/

import 
  {GET_SMURF_START,
    GET_SMURF_SUCCESS,
    GET_SMURF_FAIL,
    DELETE_SMURF
   }
  from '../actions'


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
  switch(action.type) {
    case GET_SMURF_START:
      return {
        ...state,
        fetchingSmurfs: true
      }
    case GET_SMURF_SUCCESS:
      return {
        ...state,
        fetchingSmurfs: false,
        smurfs: action.payload
      }
    case GET_SMURF_FAIL:
      return {
        ...state,
        fetchingSmurfs: false,
        error: action.payload
      }
    case DELETE_SMURF:
      return {
        ...state,
        smurfs: state.smurfs.filter(smurf => smurf.id !== action.payload)
      }
    default:
      return state;
  }


}
