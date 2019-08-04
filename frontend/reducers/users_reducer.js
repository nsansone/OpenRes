import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_REVIEW } from '../actions/restaurant_actions';

const usersReducer = (state = {}, action) => {
    Object.freeze(state);
    switch(action.type) {
        case RECEIVE_CURRENT_USER:
            return Object.assign({}, state, { [action.currentUser.id]: action.currentUser });
        case RECEIVE_REVIEW:
            return Object.assign({}, state, { [action.author.id]: action.author });
        default:
            return state;
    }
};

export default usersReducer;