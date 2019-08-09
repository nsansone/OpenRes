import { connect } from 'react-redux';
import { updateFilter } from '../../actions/filter_actions';
import Search from './search';
import { fetchRestaurants } from '../../actions/restaurant_actions';
import { updateMarkers } from '../../util/marker_manager';



const mapStateToProps = state => ({
    restaurants: Object.values(state.entities.restaurants),
    singleRest: false
});

const mapDispatchToProps = dispatch => ({
    fetchRestaurants: () => dispatch(fetchRestaurants()),
    updateFilter: (filter, value) => dispatch(updateFilter(filter, value)),
    updateMarkers: (restaurants) => dispatch(updateMarkers(restaurants))
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
