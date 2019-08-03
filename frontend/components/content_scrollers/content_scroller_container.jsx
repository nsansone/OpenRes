import { connect } from 'react-redux';
import { fetchRestaurants } from '../../actions/restaurant_actions';


import ContentScroller from './content_scroller';

const mapStateToProps = state => {
    return({
        restaurants: Object.values(state.entities.restaurants)
    })
};

const mapDispatchToProps = dispatch => ({
    fetchRestaurants: () => dispatch(fetchRestaurants())
});

export default connect(mapStateToProps, mapDispatchToProps)(ContentScroller);