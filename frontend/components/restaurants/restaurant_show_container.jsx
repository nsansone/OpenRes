import { connect } from 'react-redux';
import RestaurantShow from './restaurant_show';
import { fetchRestaurant } from '../../actions/restaurant_actions';

const mapStateToProps = (state, ownProps) => {
    const restaurantId = parseInt(ownProps.match.params.restaurantId);
    const restaurant = state.entities.restaurants[ownProps.match.params.restaurantId];
    return { restaurant, restaurantId } 
};

const mapDispatchToProps = dispatch => ({
    fetchRestaurant: id => dispatch(fetchRestaurant(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantShow);