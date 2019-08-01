import { RECEIVE_RESTAURANT, RECEIVE_RESTAURANTS } from '../actions/restaurant_actions';

const restaurantsReducer = (state = {}, action) => {
    Object.freeze(state)
    switch (action.type) {
        case RECEIVE_RESTAURANTS:
            return action.restaurants;
        case RECEIVE_RESTAURANT:
            return Object.assign({}, state, { [action.restaurant.id]: action.restaurant });
        default:
            return state;
    }
};

export default restaurantsReducer;