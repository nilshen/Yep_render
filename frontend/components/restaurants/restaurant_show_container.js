import { connect } from "react-redux";
import { requestRestaurant, requestRestaurants } from "../../actions/restaurant_actions";
import { logout } from "../../actions/session_actions";
import RestaurantShow from "./restaurant_show";
import { withRouter } from "react-router-dom";

const mSTP = (state, ownProps) => {
    // debugger
    return {
        // restaurant: state.entities.restaurants.all[ownProps.match.params.restaurantId],
        restaurant: state.entities.restaurants.restaurant,
        reviews: Object.values(state.entities.reviews),
        currentUser: state.entities.users[state.session.id],
        restaurantId: ownProps.match.params.restaurantId,
    }
    
}

const mDTP = (dispatch) =>({
    requestRestaurant: (restaurantId) => dispatch(requestRestaurant(restaurantId)),
    requestRestaurants:()=>dispatch(requestRestaurants()),
    requestReviews: (restaurantId) => dispatch(requestReviews(restaurantId)),
    logout: () => dispatch(logout()),

})

export default withRouter(connect(mSTP,mDTP)(RestaurantShow))