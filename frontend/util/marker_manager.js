export default class MarkerManager {
    constructor(map) {
        this.map = map;
        this.markers = {};
    }

    updateMarkers(restaurants){
        console.log('time to update')
    }

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