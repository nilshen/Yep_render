import { connect } from "react-redux";
import searchResult from "./search_result";
import { searchRestaurants } from "../../actions/restaurant_actions";
import { requestReviews} from '../../actions/review_actions'

const mSTP = (state) => {
    // debugger
    return {
        restaurants: Object.values(state.entities.restaurants.search),
        currentUser: state.entities.users[state.session.id],
        // errors: state.errors.restaurant
    }
};


const mDTP = (dispatch) => ({
    searchRestaurants:(input)=>dispatch(searchRestaurants(input)),
    requestReviews: (restaurantId) => dispatch(requestReviews(restaurantId)),
    logout: ()=> dispatch(logout()),
    // clearErrors: () => dispatch(clearErrors()),
});


export default connect(mSTP, mDTP)(searchResult);