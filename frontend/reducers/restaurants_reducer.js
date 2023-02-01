import { RECEIVE_ALL_RESTAURANTS, RECEIVE_RESTAURANT, RECEIVE_RESTAURANTS_SEARCH } from "../actions/restaurant_actions";

const restaurantsReducer = (state={all:{}, restaurant:{}, search: {}}, action) => {

    Object.freeze(state);

    let nextState = Object.assign({}, state);

    switch (action.type) {
        case RECEIVE_ALL_RESTAURANTS:
            nextState.all = action.restaurants;
            return nextState;
        case RECEIVE_RESTAURANT:
            // debugger
            // nextState[action.restaurant.id] = action.restaurant;
            nextState.restaurant = action.restaurant;
            return nextState;
        case RECEIVE_RESTAURANTS_SEARCH:
            nextState.search = action.restaurants
            return nextState;
            // return Object.assign({}, state, { [action.restaurant.id]: action.restaurant });
        default:
            return state;
    }
};

export default restaurantsReducer;