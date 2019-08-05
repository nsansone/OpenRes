import { connect } from 'react-redux';
import RestaurantShow from './restaurant_show';
import { fetchRestaurant } from '../../actions/restaurant_actions';
import { selectReviewsForRestaurant, selectRestaurant } from '../../reducers/selectors';

const mapStateToProps = (state, ownProps) => {
    const restaurantId = parseInt(ownProps.match.params.restaurantId);
    const restaurant = selectRestaurant(state.entities, restaurantId)
    const reviews = selectReviewsForRestaurant(state.entities, restaurant);
    return { restaurantId, restaurant, reviews } 
};

const mapDispatchToProps = dispatch => ({
    fetchRestaurant: id => dispatch(fetchRestaurant(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantShow);