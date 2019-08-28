export const fetchReservations = () => (
    $.ajax({
        method: 'GET',
        url: 'api/reservations',
    })
);

export const fetchReservation = id => (
    $.ajax({
        method: 'GET',
        url: `api/reservations/${id}`
    })
);

export const createReservation = reservation => (
    $.ajax({
        method: 'POST',
        url: 'api/reservations',
        data: { reservation }
    })
);

export const updateReservation = reservation => (
    $.ajax({
        method: 'PATCH',
        url: `api/reservations/${reservation.id}`,
        data: { reservation }

    })
);

export const deleteReservation = id => (
    $.ajax({
        method: 'DELETE',
        url: `api/reservations/${id}`
    })
);