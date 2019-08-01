export const fetchRestaurants = restaurants => (
    $.ajax({
        method: 'GET',
        url: 'api/restaurants',
        data: { restaurants }
    })
);

export const fetchRestaurant = id => (
    $.ajax({
        method: 'GET',
        url: `api/restaurants/${id}`
    })
);