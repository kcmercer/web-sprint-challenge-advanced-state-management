import axios from 'axios';

export const FETCH_START = "FETCH_START";
export const FETCH_FAIL = "FETCH_FAIL";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const ADD_SMURF = "ADD_SMURF";
export const SET_ERROR = "SET_ERROR";

export const fetchSmurfs = () => {
    return (dispatch) => {
    console.log("(A) Fetching API...")
    dispatch(fetchStart())
    axios.get('http://localhost:3333/smurfs')
        .then(resp => {
            console.log("(A) API data received.")
            console.log(resp.data)
            dispatch(fetchSuccess(resp.data))
        })
        .catch(error => {
            console.log("(A) Failed to receive API data.")
            dispatch(fetchFail(error))
        })
    }
}

export const fetchStart = () => {
    return ({type:FETCH_START})
}

export const fetchSuccess = (smurf) => {
    return({type:FETCH_SUCCESS, payload:smurf})
}

export const fetchFail = (errorMessage) => {
    return({type:FETCH_FAIL, payload:errorMessage})
}

export const addSmurf = (smurf) => {
    console.log("Sending to state...")
    axios.post('http://localhost:3333/smurfs', smurf)
        .then(resp => {
            console.log("(A) Smurf Added!")
            console.log(resp.data)
        })
        .catch(error => {
            console.log("(A) Failed to add Smurf")
            console.log(error)
        })
    return({type:ADD_SMURF, payload:smurf})
}

export const setError = (error) => {
    return({type:SET_ERROR, payload:error})
}

//Task List:
//[COMPLETE] 1. Add a thunk action called fetchSmurfs that triggers a loading status display in our application, performs an axios call to retreive smurfs from our server, saves the result of that call to our state and shows an error if one is made.
//[COMPLETE] 2. Add a standard action that allows us to add new smurf (including the name, nickname, position, summary)
//[COMPLETE] 3. Add a standard action that allows us to set the value of the error message slice of state.