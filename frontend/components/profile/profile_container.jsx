import { connect } from 'react-redux';
import Profile from './profile';
import { deleteReservation, updateReservation, fetchReservations } from '../../actions/reservation_actions';
import { fetchRestaurants } from '../../actions/restaurant_actions';

const mapStateToProps = (state, ownProps) => {

    return({
        reservations: Object.values(state.entities.reservations),
        restaurants: state.entities.restaurants,
        currentUser: state.entities.users[state.session.id]
    });
};

const mapDispatchToProps = dispatch => ({

    deleteReservation: id => dispatch(deleteReservation(id)),
    fetchReservations: () => dispatch(fetchReservations()),
    updateReservation: id => dispatch(updateReservation(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);