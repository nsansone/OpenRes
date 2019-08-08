

class MarkerManager {
    constructor(map, handleClick){
        this.map = map;
        this.handleClick = handleClick;
        this.markers = {};
    }

    updateMarkers(restaurants){
        const restaurantsObj = {};
        restaurants.forEach(restaurant => restaurantsObj[restaurant.id] = restaurant);

        restaurants.filter(restaurant => !this.markers[restaurant.id]).forEach(newRest => this.createMarkerFromRestaurant(newRest, this.handleClick));

        Object.keys(this.markers).filter(restaurantId => !restaurantsObj[restaurantId]).forEach((restaurantId) => this.removeMarker(this.markers[restaurantId]));
    }

    createMarkerFromRestaurant(restaurant){
        const position = new google.maps.LatLng(restaurant.lat, restaurant.lng);
        const marker = new google.maps.Marker({position, map: this.map, restaurantId: restaurant.id});

        marker.addListener('click', () => this.handleClick(restaurant));
        this.markers[marker.restaurantId] = marker;
    }

    removeMarker(marker) {
        this.markers[marker.restaurantId].setMap(null);
        delete this.markers[marker.restaurantId];
    }
}

export default MarkerManager;