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
    zoom: 11
};

class ShowRestaurantMap extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const map = this.refs.map;
        this.map = new google.maps.Map(map, mapOptions);
        this.MarkerManager = new MarkerManager(this.map, this.handleClick);
        if (this.props.singleRestaurant) {
        } else {
            this.registerListeners();
            this.MarkerManager.updateMarkers(this.props.restaurants)
        }
    }

    componentDidUpdate() {
        if (this.props.singleRestaurant) {
            this.MarkerManager.createMarkerFromRestaurant(this.props.restaurant);
        } else {
            this.MarkerManager.updateMarkers(this.props.restaurants);
        }
    }

    registerListeners() {
        google.maps.event.addListener(this.map, 'idle', () => {
            const { north, south, east, west } = this.map.getBounds().toJSON();
            const bounds = {
                northEast: { lat: north, lng: east },
                southWest: { lat: south, lng: west }
            };
            this.props.updateFilter('bounds', bounds);

        });
        google.maps.event.addListener(this.map, 'click', (event) => {

        });
    }

    handleMarkerClick(restaurant) {
        this.props.history.push(`/restaurants/${restaurant.id}`);
    }


    render() {
        return (
            <div className="map" ref="map">
                Map
            </div>
        );
    }
}

export default withRouter(ShowRestaurantMap);