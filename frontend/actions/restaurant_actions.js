import * as APIUtil from '../util/restaurant_api_util';

export const RECEIVE_RESTAURANTS = 'RECEIVE_RESTAURANTS';
export const RECEIVE_RESTAURANT = 'RECEIVE_RESTAURANT';
export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';

export const receiveRestaurants = restaurants => ({
    type: RECEIVE_RESTAURANTS,
    restaurants,
});

export const receiveRestaurant = ({ restaurant, reviews }) => ({
    type: RECEIVE_RESTAURANT,
    restaurant,
    reviews,
});

export const receiveReview = ({ review, average_rating }) => ({
    type: RECEIVE_REVIEW,
    review,
    average_rating,
    authors,
})

export const createReview = review => dispatch => (
    APIUtil.createReview(review).then(review => (
        dispatch(receiveReview(review))
    ))
);

export const fetchRestaurants = restaurants => dispatch => (
    APIUtil.fetchRestaurants(restaurants).then(restaurants => (
        dispatch(receiveRestaurants(restaurants))
    ))
);

export const fetchRestaurant = id => dispatch => (
    APIUtil.fetchRestaurant(id).then(payload => (
        dispatch(receiveRestaurant(payload))
    ))
);