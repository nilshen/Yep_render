
import * as ReviewAPIUtil from '../util/review_api_util';

export const RECEIVE_ALL_REVIEWS = "RECEIVE_ALL_REVIEWS";
export const RECEIVE_REVIEW = "RECEIVE_REVIEW";
export const CREATE_REVIEW = "CREATE_REVIEW";
export const UPDATE_REVIEW = "UPDATE_REVIEW";
export const REMOVE_REVIEW = "REMOVE_REVIEW";
export const RECEIVE_REVIEW_ERRORS = "RECEIVE_REVIEW_ERRORS";
export const CLEAR_REVIEW_ERRORS = "CLEAR_REVIEW_ERRORS";

//action creator
export const receiveAllReviews = (reviews) => {
    return {
        type: RECEIVE_ALL_REVIEWS,
        reviews,
    }
}

export const receiveReview = (review) => {
    return {
        type: RECEIVE_REVIEW,
        review,
    }
}

export const removeReview = (review) => {
    return {
        type: REMOVE_REVIEW,
        review,
    }
} 

export const receiveReviewErrors = (errors) => {
    return {
        type: RECEIVE_REVIEW_ERRORS,
        errors
    }
};

export const clearReviewErrors = () => {
    return {
        type: CLEAR_REVIEW_ERRORS
    }
};

//thunk action creator
export const requestReviews = (restaurantId) => dispatch => {
    return ReviewAPIUtil.fetchReviews(restaurantId)
        .then((reviews) => dispatch(receiveAllReviews(reviews)))
}

export const requestReview = (restaurantId, reviewId) => dispatch => {
    return ReviewAPIUtil.fetchReview(restaurantId, reviewId)
        .then((review) => dispatch(receiveReview(review)))
}

export const createReview = (review, restaurantId) => (dispatch) => {
    return ReviewAPIUtil.createReview(review, restaurantId)
        .then(
            (review) => dispatch(receiveReview(review)),
            (error) => dispatch(receiveReviewErrors(error))    
        )
}

export const updateReview = (review, restaurantId) => (dispatch) =>{
    return ReviewAPIUtil.updateReview(review, restaurantId)
        .then(
            (review) => dispatch(receiveReview(review)),
            (error) => dispatch(receiveReviewErrors(error))
            )
}

export const deleteReview = (reviewId, restaurantId) =>(dispatch) =>{
    return ReviewAPIUtil.deleteReview(reviewId, restaurantId)
        .then(
            (review) => dispatch(removeReview(review)),
            (error) => dispatch(receiveReviewErrors(error))
            )
}