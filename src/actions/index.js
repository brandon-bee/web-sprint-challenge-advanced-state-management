import axios from 'axios';

export const FETCH_START = "FETCH_START";
export const FETCH_FAIL = "FETCH_FAIL";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const ADD_SMURF = "ADD_SMURF";
export const ADD_ERROR = "ADD_ERROR";

export const fetchSmurfs = () => {
  return(dispatch) => {
    dispatch(fetchStart());
    axios.get("http://localhost:3333/smurfs/")
      .then(resp => {
        console.log(resp.data);
        dispatch({type: fetchSuccess(resp.data)});
      })
      .catch(err => {
        dispatch({type: addError(err)});
        dispatch({type: fetchFail()})
      })
  };
};

export const fetchStart = () => {
  return({type: FETCH_START});
};

export const fetchFail = () => {
  return({type: FETCH_FAIL});
};

export const fetchSuccess = (smurfs) => {
  return({type: FETCH_SUCCESS, payload: smurfs});
};

export const addSmurf = (smurf) => {
  return({type: ADD_SMURF, payload: smurf});
};

const addError = (err) => {
  return({type: ADD_ERROR, payload: err});
};
//Task List:
//1. Add a thunk action called fetchSmurfs that triggers a loading status display in our application, performs an axios call to retreive smurfs from our server, saves the result of that call to our state and shows an error if one is made.
//2. Add a standard action that allows us to add new smurf (including the name, nickname, position, summary)
//3. Add a standard action that allows us to set the value of the error message slice of state.