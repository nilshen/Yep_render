import { connect } from "react-redux";
import ReviewIndex from "./review_index";
import { requestReviews, updateReview, deleteReview, requestReview } from "../../actions/review_actions";



const mSTP = (state, ownProps) => {
    return {
        reviews: Object.values(state.entities.reviews),
        currentUser: state.entities.users[state.session.id]

    }
};


const mDTP = (dispatch) => {
    return {
        requestReviews: (restaurantId) => dispatch(requestReviews(restaurantId)),
        updateReview: (review, restaurantId) => dispatch(updateReview(review, restaurantId)),
        deleteReview: (reviewId, restaurantId) => dispatch(deleteReview(reviewId, restaurantId)),
        requestReview: (restaurantId, reviewId) => dispatch(requestReview(restaurantId, reviewId))
    }
};


export default connect(mSTP, mDTP)(ReviewIndex)

