import { connect } from 'react-redux';
import RestaurantShow from './restaurant_show';
import { fetchRestaurant } from '../../actions/restaurant_actions';
import RestaurantDetail from './restaurant_detail';

const mapStateToProps = (state, ownProps) => {
    const restaurantId = parseInt(ownProps.match.params.restaurantId);
    const restaurant = state.entities.restaurants[restaurantId] || {reviewIds: [], lat: 0, lng: 0};
    const reviewIds = restaurant.reviewIds || [];
    const reviews = reviewIds.map(reviewId => state.entities.reviews[reviewId]);
    const session = state.session;

    return { restaurantId, restaurant, reviews, session }; 
};


const mapDispatchToProps = dispatch => ({
    fetchRestaurant: id => dispatch(fetchRestaurant(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantShow);