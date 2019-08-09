import React from 'react';
import ReactDOM from 'react-dom';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import MarkerManager from '../../util/marker_manager';





const mapOptions = {
    center: {
        lat: 40.7420207,
        lng: -73.989928
    },
    zoom: 13
};

class RestaurantMap extends React.Component {
    constructor(props){
        super(props);
        // this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        const map = this.refs.map;
        // const myLat = parseInt(this.props.restaurant.lat);
        // const myLng = parseInt(this.props.restaurant.lng);
        // const myLatLng = new google.maps.LatLng(myLat, myLng);
        // const mapOptions = {
        //     center: myLatLng,
        //     zoom: 12
        // };
        this.map = new google.maps.Map(map, mapOptions);
        this.MarkerManager = new MarkerManager(this.map, this.handleClick);
        if (this.props.singleRestaurant){
            // this.props.fetchRestaurant(this.props.restaurantId);
        } else {
            this.registerListeners();
            this.MarkerManager.updateMarkers(this.props.restaurants)
        }
        // const marker = new google.maps.Marker({
        //     position: myLatLng,
        //     title: "spencer was here"
        // });
        // marker.setMap(this.map);
    }

    componentDidUpdate() {
        if (this.props.singleRestaurant) {
            this.MarkerManager.createMarkerFromRestaurant(this.props.restaurant);
        } else {
            this.MarkerManager.updateMarkers(this.props.restaurants);
        }
    }

    registerListeners(){
        // google.maps.event.addListener(this.map, 'idle', () => {
        //     const { north, south, east, west } = this.map.getBounds().toJSON();
        //     const bounds = {
        //         northEast: { lat: north, lng: east },
        //         southWest: { lat: south, lng: west } };
        //     this.props.updateFilter('bounds', bounds);

        // });
        // google.maps.event.addListener(this.map, 'click', (event) => {
        //     // const coords = getCoordsObj(event.latLng);
        //     // this.handleClick(coords);
        // });
    }

    handleMarkerClick(restaurant){
        this.props.history.push(`/restaurants/${restaurant.id}`);
    }

    // handleClick(coords){
    //     this.props.history.push({
    //         pathname: 'restaurants/new',
    //         search: `lat=${coords.lat}$lng=${coords.lng}`
    //     });
    // }

    

    render() {
        return (

            <div className="index-map" ref="map"></div>
        );
            // <div className="map-cont"> 
            //     <div className="map" ref={ map => this.mapNode = map}></div>
            //     <p className="map-address">
            //         <i className="fas fa-map-marker-alt"></i>  {this.props.restaurant.address}
            //     </p>
            // </div>
        } 
    
}

export default withRouter(RestaurantMap);