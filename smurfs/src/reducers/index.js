/*
  Be sure to import in all of the action types from `../actions`
*/

import 
  {GET_SMURF_START,
    GET_SMURF_SUCCESS,
    GET_SMURF_FAIL,
    DELETE_SMURF_SUCCESS,
    ADD_SMURF_SUCCESS,
    EDIT_SMURF,
    CHANGE_SMURF,
    CHANGE_SMURF_SUCCESS,
    CHANGE_SMURF_FAIL
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
    case DELETE_SMURF_SUCCESS:
      return {
        ...state,
        smurfs: action.payload
      }
    case ADD_SMURF_SUCCESS:
      return {
        ...state,
        smurfs: action.payload
        
      }
      case EDIT_SMURF:
      return {
        ...state,
        updatingSmurf: true
        
       }
      case CHANGE_SMURF:
      return {
        ...state,
        updatingSmurf: false
      }
      case CHANGE_SMURF_SUCCESS:
        return {
          ...state,
          updatingSmurf: false,
          smurfs: action.payload
        }
    default:
      return state;
  }


}
