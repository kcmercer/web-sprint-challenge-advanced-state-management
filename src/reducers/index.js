import { FETCH_START, FETCH_FAIL, FETCH_SUCCESS, ADD_SMURF, CHANGE_ERROR } from '../actions/';


export const initialState = {
    smurfs: [],
    isLoading: false,
    error: ''
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_START:
            return {
                ...state,
                smurfs: [],
                isLoading: true,
                error: ''
            }
        case FETCH_FAIL:
            return {
                ...state,
                smurfs: [],
                isLoading: false,
                error: action.payload
            }
        case FETCH_SUCCESS:
            return {
                ...state,
                smurfs: action.payload,
                isLoading: false,
                error: ''
            }
        case ADD_SMURF:
            return {
                ...state,
                smurfs: [...state.smurfs , {
                    id: action.payload.id,
                    name: action.payload.name,
                    nickname: action.payload.nickname,
                    position: action.payload.position,
                    summary: action.payload.summary
                }]
            }
        case CHANGE_ERROR:
            return {
                ...state,
                error: action.payload
            }
        default:
            return state
    }
}

//**************DO NOT EDIT ANY CODE BEYOND THIS POINT**************//
export default reducer;

//Task List:
//[COMPLETE] 1. Adds the following state values into the initialState:
//  - an array of smurfs
//  - a boolean indicating if the app is loading
//  - a string indicating a possible error message

//[COMPLETE] 2. Add in the arguments needed to complete a standard reducer function.
//[COMPLETE] 3. Add in a reducer case to accomidate the start of a smurf fetch.
//[COMPLETE] 4. Add in a reducer case to accomidate the successful smurf api fetch.
//[COMPLETE] 5. Add in a reducer cases to accomidate the failed smurf api fetch.
//[COMPLETE] 6. Add in a reducer case to accomidate adding a smurf (including the name, nickname, position, summary and an internally generated id) into your smurf list.
//7. Add in a reducer case that adds in a value to the error message.