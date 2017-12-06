import ActionTypes from '../constant/ActionTypes.js';

const initialState = {
    busy: false,
};




export default function ActionStore(state = initialState, action) {
    switch (action.type) {
        case ActionTypes.SHOW_BUSY:
            return {...state, busy: action.busy};
            break;
    
        default:
            return state;
    }
}