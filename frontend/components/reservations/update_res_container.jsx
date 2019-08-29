import UpdateRes from './update_res';
import { updateReservation, fetchReservation } from '../../actions/reservation_actions';
import { connect } from 'react-redux';

const mapStateToProps = (state, ownProps) => {
  
  return ({
    restaurant: state.entities.restaurants[ownProps.match.params.restaurantId] || {},
    reservation: state.entities.reservations[parseInt(ownProps.match.params.reservationId)] || {},
    currentUser: state.entities.users[state.session.id]
  });
};

const mapDispatchToProps = dispatch => {
  return ({
    fetchReservation: id => dispatch(fetchReservation(id)),
    updateReservation: reservation => dispatch(updateReservation(reservation))
   
  });
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UpdateRes);