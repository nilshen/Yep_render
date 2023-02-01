import * as RestaurantAPIUtil from '../util/restaurant_api_util.js';

export const RECEIVE_ALL_RESTAURANTS = "RECEIVE_ALL_RESTAURANTS";
export const RECEIVE_RESTAURANTS_SEARCH = "RECEIVE_RESTAURANTS_SEARCH";
export const RECEIVE_RESTAURANT = "RECEIVE_RESTAURANT"
export const CLEAR_ERRORS = "CLEAR_ERRORS";

//action creator
export const receiveAllRestaurants = (restaurants) => {
    return {
        type: RECEIVE_ALL_RESTAURANTS,
        restaurants,
    }
}

export const receiveRestaurantsSearch = (restaurants) => {
    return {
        type: RECEIVE_RESTAURANTS_SEARCH,
        restaurants,
    }
}

export const receiveRestaurant = (restaurant) => {
    return {
        type: RECEIVE_RESTAURANT,
        restaurant,
    }
}

export const receiveRestaurantErrors = (errors) => {
    return {
        type: RECEIVE_RESTAURANT_ERRORS,
        errors
    }
};

export const clearErrors = () => {
    return {
        type: CLEAR_ERRORS
    }
}

//thunk action creator
export const requestRestaurants = () => dispatch => {
    return RestaurantAPIUtil.fetchRestaurants()
        .then((restaurants) => dispatch(receiveAllRestaurants(restaurants)),
        error => dispatch(receiveRestaurantErrors(error.responseJSON))
        )

}
export const searchRestaurants = (input) => dispatch => {
    return RestaurantAPIUtil.searchRestaurants(input)
        .then((restaurants) => dispatch(receiveRestaurantsSearch(restaurants)),
        error => dispatch(receiveRestaurantErrors(error.responseJSON))
        )
}

export const requestRestaurant = (restaurantId) => dispatch => {
    return RestaurantAPIUtil.fetchRestaurant(restaurantId)
        .then((restaurant) => dispatch(receiveRestaurant(restaurant)),
        error => dispatch(receiveRestaurantErrors(error.responseJSON))
        )
}