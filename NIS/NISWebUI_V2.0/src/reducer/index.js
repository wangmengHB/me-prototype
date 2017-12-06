import ActionTypes from '../constant/ActionTypes.js';
import {combineReducers} from 'redux';

const initialState = {
    busy: false,
};

function showBusy (state = initialState, action) {
    switch (action.type) {
        case ActionTypes.SHOW_BUSY:
            return {...state, busy: action.busy}
            break;
    
        default:
            return state;
    }
}


const rootReducer = combineReducers({
    showBusy
});


export default rootReducer;