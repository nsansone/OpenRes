import { RECEIVE_RESTAURANT, RECEIVE_RESTAURANTS, RECEIVE_REVIEW } from '../actions/restaurant_actions';

const restaurantsReducer = (state = {}, action) => {
    Object.freeze(state)
    switch (action.type) {
        case RECEIVE_RESTAURANTS:
            return action.restaurants;
        case RECEIVE_RESTAURANT:
            return Object.assign({}, state, { [action.restaurant.id]: action.restaurant });
        case RECEIVE_REVIEW:
            const { review, average_rating } = action;
            const newState = merge({}, state);
            newState[review.restaurant_id].reviewIds.push(review.id);
            newState[review.restaurant_id].average_rating = average_rating;
            return newState;
        default:
            return state;
    }
};

export default restaurantsReducer;