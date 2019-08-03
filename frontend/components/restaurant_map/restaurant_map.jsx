import React from 'react';
import ReactDOM from 'react-dom';
import { withRouter } from 'react-router-dom';





class RestaurantMap extends React.Component {
    componentDidMount() {
        const mapOptions = {
            center: { lat: 40.7484, lng: -73.9857 },
            zoom: 13
        };
        this.map = new google.maps.Map(this.mapNode, mapOptions);
    }

    render() {
        return (
            <div className="map-cont"> 
                <div className="map" ref={ map => this.mapNode = map}></div>
                <p className="map-address">
                    <i className="fas fa-map-marker-alt"></i>  sample address
                </p>
            </div>
        )
    }

    
}

export default withRouter(RestaurantMap);