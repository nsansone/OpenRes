export const fetchReservations = () => (
    $.ajax({
        method: 'GET',
        url: 'api/reservations',
    })
);

export const createReservation = reservation => (
    $.ajax({
        method: 'POST',
        url: 'api/reservations',
        data: { reservation }
    })
);

export const updateReservation = id => (
    $.ajax({
        method: 'PATCH',
        url: `api/reservations/${id}`
    })
);

export const deleteReservation = id => (
    $.ajax({
        method: 'DELETE',
        url: `api/reservations/${id}`
    })
);