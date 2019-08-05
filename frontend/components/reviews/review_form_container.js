import { connect } from 'react-redux';
import { createReview, fetchRestaurant } from '../../actions/restaurant_actions';
import ReviewForm from './review_form';

const mapStateToProps = (state, ownProps) => {
    return({
        restaurant: state.entities.restaurants[ownProps.match.params.restaurantId] || {name: ""}
    });
};

const mapDispatchToProps = dispatch => {
    return ({
        createReview: review => dispatch(createReview(review)),
        fetchRestaurant: id => dispatch(fetchRestaurant(id))
    });
};
export default connect(
   mapStateToProps,
    mapDispatchToProps
)(ReviewForm);
