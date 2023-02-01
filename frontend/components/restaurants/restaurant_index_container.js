import { connect } from "react-redux";
import RestaurantIndex from "./restaurant_index";
import { requestRestaurants } from "../../actions/restaurant_actions";
import { withRouter } from "react-router-dom";
import { requestReviews } from "../../actions/review_actions";

const mSTP = (state) => ({
    restaurants: Object.values(state.entities.restaurants.all),
    reviews: Object.values(state.entities.reviews),
    currentUser: state.entities.users[state.session.id],
});

const mDTP = (dispatch) => ({
    requestRestaurants: () => dispatch(requestRestaurants()),
    requestReviews: (restaurantId) => dispatch(requestReviews(restaurantId)),
    logout: ()=> dispatch(logout()),
});

export default withRouter(connect(mSTP, mDTP)(RestaurantIndex));