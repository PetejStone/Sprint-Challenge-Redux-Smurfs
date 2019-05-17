/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/
import axios from 'axios'

export const GET_SMURF_START = "GET_SMURF_START"
export const GET_SMURF_SUCCESS= "GET_SMURF_SUCCESS"
export const GET_SMURF_FAIL= "GET_SMURF_FAIL"
/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/

export const getSmurfs = () => dispatch => {
 dispatch({type: GET_SMURF_START});
 axios.get('http://localhost:3333/smurfs')
 .then(res => {
   //console.log(res.data),
   dispatch({type: GET_SMURF_SUCCESS, payload: res.data })
  })
 .catch(err => {
   //console.log(err.message),
   dispatch({type: GET_SMURF_FAIL, payload: err.message})
  })
}

export const DELETE_SMURF = "DELETE_SMURF"
export const deleteSmurf = id => {
  return {
    type: DELETE_SMURF,
    payload: id
  }
}

export const ADD_SMURF = "ADD_SMURF"
export const addSmurf = data => {
  return {
    type: ADD_SMURF,
    payload: data
  }
}

export const EDIT_SMURF = "EDIT_SMURF"
export const editSmurf = data => {
  return {
    type: EDIT_SMURF,
    payload: data
  }
}