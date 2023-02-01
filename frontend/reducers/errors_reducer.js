import { combineReducers } from 'redux';

import session from './session_errors_reducer';
import review from './review_erros_reducer';
import restaurant from './restaurant_errors_reducer';

export default combineReducers({
    session,
    review,
    restaurant,
});