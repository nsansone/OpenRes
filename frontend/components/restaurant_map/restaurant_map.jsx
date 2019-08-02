import React from 'react';
import ReactDOM from 'react-dom';
import { withRouter } from 'react-router-dom';



class RestaurantMap extends React.Component {
    componentDidMount() {
        const mapOptions = {
            center: { lat: 40.7484, lng: 73.9857 },
            zoom: 13
        };
        this.map = new google.maps.Map(this.mapNode, mapOptions);
    }

    render() {
        return (
            <div className="map" ref={ map => this.mapNode = map}></div>
        )
    }

    
}

export default withRouter(RestaurantMap);