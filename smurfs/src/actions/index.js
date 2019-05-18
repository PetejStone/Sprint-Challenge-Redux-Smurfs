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



export const ADD_SMURF = "ADD_SMURF"
export const ADD_SMURF_SUCCESS = "ADD_SMURF_SUCCESS"
export const ADD_SMURF_FAIL = "ADD_SMURF_FAIL"


export const addSmurf = smurf => dispatch => {
  dispatch({type: ADD_SMURF});
  axios.post(`http://localhost:3333/smurfs`, smurf)
  .then(res => {
    //console.log(res.data),
    dispatch({type: ADD_SMURF_SUCCESS, payload: res.data })
   })
  .catch(err => {
    //console.log(err.message),
    dispatch({type: ADD_SMURF_FAIL, payload: err.message})
   })
 }

export const EDIT_SMURF = "EDIT_SMURF"
export const editSmurf = data => {
  return {
    type: EDIT_SMURF,
    payload: data
  }
}

export const CHANGE_SMURF = "CHANGE_SMURF"
export const CHANGE_SMURF_SUCCESS = "CHANGE_SMURF_SUCCESS"
export const CHANGE_SMURF_FAIL = "CHANGE_SMURF_FAIL"
export const submitChanges = (smurf) => dispatch => {
 dispatch({type: CHANGE_SMURF});
 axios.put(`http://localhost:3333/smurfs/${smurf.id}`, smurf)
 .then(res => {
   console.log(`TESTING${res.data}`)
   dispatch({ type: CHANGE_SMURF_SUCCESS, payload: res.data })
  })
 .catch(err => {
   //console.log(err.message),
   dispatch({type: CHANGE_SMURF_FAIL, payload: err.message})
  })
}

export const DELETE_SMURF = "DELETE_SMURF"
export const DELETE_SMURF_SUCCESS = "DELETE_SMURF_SUCCESS"
export const DELETE_SMURF_FAIL = "DELETE_SMURF_FAIL"
export const deleteSmurf = (id) => dispatch => {
  dispatch({type: DELETE_SMURF});
  axios.delete(`http://localhost:3333/smurfs/${id}`)
  .then(res => {
    console.log(`TESTING${res.data}`)
    dispatch({ type: DELETE_SMURF_SUCCESS, payload: res.data })
   })
  .catch(err => {
    //console.log(err.message),
    dispatch({type: DELETE_SMURF_FAIL, payload: err.message})
   })
 }