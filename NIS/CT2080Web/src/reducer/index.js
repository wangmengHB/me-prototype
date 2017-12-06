import {combineReducers} from 'redux';
import * as ActionTypes from '../constant/ActionTypes.js';




const initialState = {requesting: false};

const reducer1 = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.REQUESTING:
           return Object.assign({}, state, action.requesting);
            
        default:
            return state;
    }
}


export default combineReducers({
    reducer1
})