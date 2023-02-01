import { RECEIVE_RESTAURANT, RECEIVE_RESTAURANT_ERRORS, CLEAR_ERRORS } from "../actions/restaurant_actions";


const BusinessErrorsReducer = (state = [], action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);

    switch (action.type) {
        case RECEIVE_RESTAURANT:
            return [];
        case RECEIVE_RESTAURANT_ERRORS:
            nextState = action.errors;
            return nextState;
        case CLEAR_ERRORS:
            return [];
        default:
            return state;
    }
};


export default BusinessErrorsReducer;