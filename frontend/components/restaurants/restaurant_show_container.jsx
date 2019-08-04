import { connect } from 'react-redux';
import RestaurantShow from './restaurant_show';
import { fetchRestaurant } from '../../actions/restaurant_actions';

const mapStateToProps = (state, ownProps) => {
    // const restaurantId = parseInt(ownProps.match.params.restaurantId);
    const restaurant = state.entities.restaurants[ownProps.match.params.restaurantId] || {name: "", address: "", website: "", phone: "", lat: 0, lng: 0};
    const reviews = state.entities.restaurants[ownProps.match.params.restaurantId].reviews || {}
    return { restaurant, reviews } 
};

const mapDispatchToProps = dispatch => ({
    fetchRestaurant: id => dispatch(fetchRestaurant(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantShow);