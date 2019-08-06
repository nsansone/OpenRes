import { connect } from 'react-redux';
import { fetchRestaurants } from '../../actions/restaurant_actions';

import RestaurantIndex from './restaurant_index';


const mapStateToProps = state => ({
    restaurants: Object.keys(state.entities.restaurants).map(key => state.entities.restaurants[key])
});

const mapDispatchToProps = dispatch => ({
    fetchRestaurants: () => dispatch(fetchRestaurants())
});

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantIndex);