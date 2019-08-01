import { connect } from 'react-redux';
import { fetchRestaurants } from '../../actions/restaurant_actions';

import RestaurantIndex from './restaurant_index';

const mapStateToProps = state => ({
    restaurants: Object.values(state.entities.restaurants)
});

const mapDispatchToProps = dispatch => ({
    fetchRestaurants: () => dispatch(fetchRestaurants())
});

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantIndex);