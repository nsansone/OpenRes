import { connect } from 'react-redux';
import { fetchRestaurants } from '../../actions/restaurant_actions';

import RestaurantIndex from './restaurant_index';
import { asArray } from '../../reducers/selectors';

const mapStateToProps = state => ({
    restaurants: asArray(state.entities)
});

const mapDispatchToProps = dispatch => ({
    fetchRestaurants: () => dispatch(fetchRestaurants())
});

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantIndex);