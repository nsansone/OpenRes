export default class MarkerManager {
    constructor(map) {
        this.map = map;
        this.markers = {};
    }

    // updateMarkers(restaurants){
    //     const newRestaurants = {};
    //     restaurants.forEach(restaurant => {
    //         if (!this.markers[restaurant.id]) {
    //         newRestaurants[restaurant.id] = restaurant;
    //         }
    //     }
   

    // }

    componentDidMount(){
        this.map = new google.maps.Map(mapDOMNode, mapOptions);
        this.MarkerManager = new MarkerManager(this.map);
    }

    createMarkerFromBench(restaurant) {
        const position = new google.maps.LatLng(restaurant.lat, restaurant.lng);
        const marker = new google.maps.Marker({
            position,
            map: this.map,
            restaurantId: restaurant.id
        });
        this.markers[restaurant.id] = marker;
    }
}