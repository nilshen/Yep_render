import { RECEIVE_ALL_REVIEWS, RECEIVE_REVIEW, REMOVE_REVIEW } from "../actions/review_actions";

const reviewsReducer = (state={}, action) => {

    Object.freeze(state);

    let nextState = Object.assign({}, state);

    switch (action.type) {
        case RECEIVE_ALL_REVIEWS:
            nextState = action.reviews;
            return nextState;
        case RECEIVE_REVIEW:
            nextState[action.review.id] = action.review;
            return nextState;
            // return Object.assign({}, state, { [action.review.id]: action.restaurant });
        case REMOVE_REVIEW:
            delete nextState[action.review.id]
            return nextState;
            default:
            return state;
    }
};

export default reviewsReducer;