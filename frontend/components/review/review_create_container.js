import { connect } from "react-redux";
import { createReview } from "../../actions/review_actions";
import { requestRestaurant } from "../../actions/restaurant_actions";
import { logout } from "../../actions/session_actions";
import reviewCreate from "./review_create";
import { withRouter } from "react-router-dom";

const mSTP = (state, ownProps) => {
    // console.log(ownProps)
    debugger
    return {
        currentUser: state.entities.users[state.session.id],
        // restaurant: state.entities.restaurants.all[ownProps.match.params.restaurantId],
        restaurant: state.entities.restaurants.restaurant,
        errors: state.errors.review,
        user_id: state.session.id
    }
};



const mDTP = (dispatch) => {
    return {
        createReview: (review, restaurantId) => dispatch(createReview(review, restaurantId)),
        requestRestaurant: (restaurantId) => dispatch(requestRestaurant(restaurantId)),
        logout: () => dispatch(logout()),
        clearReviewErrors: () => dispatch(clearReviewErrors()),
    }
};


export default withRouter(connect(mSTP, mDTP)(reviewCreate))