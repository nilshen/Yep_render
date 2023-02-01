import { connect } from "react-redux";
import ReviewEdit from "./review_edit";
import { requestReview, updateReview  } from "../../actions/review_actions";
import { requestRestaurant } from "../../actions/restaurant_actions";
import { logout } from "../../actions/session_actions";


const mSTP = (state, ownProps) => {
    // console.log(ownProps);
    return {
        review: state.entities.reviews[ownProps.match.params.reviewId],
        // restaurant: state.entities.restaurants.all[ownProps.match.params.restaurantId],
        restaurant: state.entities.restaurants.restaurant,
        currentUser: state.entities.users[state.session.id],
        user_id: state.session.id,
        restaurantId: ownProps.match.params.restaurantId,
        reviewId: ownProps.match.params.reviewId,
        errors: state.errors.review
    }
};


const mDTP = (dispatch) => {
    return {
        requestReview: (restaurantId, reviewId) => dispatch(requestReview(restaurantId, reviewId)),
        updateReview: (review, restaurantId) => dispatch(updateReview(review, restaurantId)),
        requestRestaurant: (restaurantId) => dispatch(requestRestaurant(restaurantId)),
        logout: () => dispatch(logout())
    }
};


export default connect(mSTP, mDTP)(ReviewEdit);