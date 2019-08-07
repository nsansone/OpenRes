import React from 'react';
import ReactDOM from 'react-dom';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';





class RestaurantMap extends React.Component {
    constructor(props){
        super(props);
    }
    componentDidUpdate() {
        const myLat = parseInt(this.props.restaurant.lat);
        const myLng = parseInt(this.props.restaurant.lng);
        const myLatLng = new google.maps.LatLng(myLat, myLng);
        const mapOptions = {
            center: myLatLng,
            zoom: 12
        };
        this.map = new google.maps.Map(this.mapNode, mapOptions);
        const marker = new google.maps.Marker({
            position: myLatLng,
            title: "spencer was here"
        });
        marker.setMap(this.map);
    }

    

    render() {
        return (
            <div className="map-cont"> 
                <div className="map" ref={ map => this.mapNode = map}></div>
                <p className="map-address">
                    <i className="fas fa-map-marker-alt"></i>  {this.props.restaurant.address}
                </p>
            </div>
        )
    }


    
    
}

export default withRouter(RestaurantMap);