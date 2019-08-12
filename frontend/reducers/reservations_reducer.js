import { RECEIVE_RESERVATIONS, RECEIVE_RESERVATION, REMOVE_RESERVATION } from '../actions/reservation_actions';


const reservationsReducer = (state = {}, action) => {
    Object.freeze(state);
    switch(action.type){
        case RECEIVE_RESERVATIONS:
            return Object.assign({}, action.payload.reservations);
        case RECEIVE_RESERVATION:
            return Object.assign({}, state, {[action.reservation.id]: action.reservation});
        case REMOVE_RESERVATION:
            const newState = Object.assign({}, state);
            delete newState[action.reservationId];
            return newState;
        default:
            return state;
    }
};

export default reservationsReducer;