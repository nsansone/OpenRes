import * as ResApiUtil from '../util/reservations_api_util';

export const RECEIVE_RESERVATION = 'RECEIVE_RESERVATION';
export const REMOVE_RESERVATION = 'REMOVE_RESERVATION';
export const RECEIVE_RESERVATIONS = "RECEIVE_RESERVATIONS";

const receiveReservations = payload => {
    return {type: RECEIVE_RESERVATIONS,
    payload};
    
};

const receiveReservation = reservation => ({
    type: RECEIVE_RESERVATION,
    reservation
});

const removeReservation = reservationId => ({
    type: REMOVE_RESERVATION,
    reservationId
});

export const fetchReservations = () => dispatch => (
    ResApiUtil.fetchReservations().then(payload => dispatch(receiveReservations(payload)))
);

export const fetchReservation = id => dispatch => (
    ResApiUtil.fetchReservation(id).then(reservation => (
        dispatch(receiveReservation(reservation))
    ))
);

export const createReservation = reservation => dispatch => (
    ResApiUtil.createReservation(reservation).then(reservation => dispatch(receiveReservation(reservation)))
);

export const updateReservation = reservation => dispatch => (
    ResApiUtil.updateReservation(reservation).then(reservation => dispatch(receiveReservation(reservation)))
);

export const deleteReservation = reservationId => dispatch => (
    ResApiUtil.deleteReservation(reservationId).then(reservation => dispatch(removeReservation(reservationId)))
);