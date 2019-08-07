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

export const createReservation = reservation => dispatch => (
    ResApiUtil.createReservation(reservation).then(reservation => dispatch(receiveReservation(reservation)))
);

export const updateReservation = id => dispatch => (
    ResApiUtil.updateReservation(id).then(reservation => dispatch(receiveReservation(reservation)))
);

export const deleteReservation = reservationId => dispatch => (
    ResApiUtil.removeReservation(reservationId).then(reservation => dispatch(removeReservation(reservationId)))
);