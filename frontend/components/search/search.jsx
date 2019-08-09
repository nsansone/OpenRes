import React from 'react';
import FilterForm from './filter_form';
import RestaurantMap from '../restaurant_map/restaurant_map';
import RestaurantIndex from './restaurant_index';
import { Link } from 'react-router-dom';
import SearchBar from './search_bar';
import MarkerManager from '../../util/marker_manager';


const mapOptions = {
    center: {
        lat: 40.7420207,
        lng: -73.989928
    },
    zoom: 13
};

class Search extends React.Component {
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = {mapHidden: "map-hidden",
                      asideVisible: "aside-vis",
                      buttonHid: "button-hid"
                    }
        this.registerListeners = this.registerListeners.bind(this);
    }

    updateMarkers(restaurants) {
        const restaurantsObj = {};
        restaurants.forEach(restaurant => restaurantsObj[restaurant.id] = restaurant);

        restaurants.filter(restaurant => !this.markers[restaurant.id]).forEach(newRest => this.createMarkerFromRestaurant(newRest, this.handleClick));

        Object.keys(this.markers).filter(restaurantId => !restaurantsObj[restaurantId]).forEach((restaurantId) => this.removeMarker(this.markers[restaurantId]));
    }
    
    componentDidMount(){
        if (this.props.history.location.fromPage !== "homepage") {
            this.props.fetchRestaurants()
        } 
    }

    handleClick(e){
        e.preventDefault();
        if (this.state.mapHidden === 'map-hidden') {
            const map = this.refs.map
            this.map = new google.maps.Map(map, mapOptions);
            this.MarkerManager = new MarkerManager(this.map, this.handleClick);
            // this.MarkerManager.updateMarkers(this.props.restaurants) 
            this.setState({ mapHidden: 'map-visible', asideVisible: 'aside-hid', buttonHid: "button-vis" });
            this.registerListeners();
            this.MarkerManager.updateMarkers(this.props.restaurants) 
        } else {
            this.setState({ mapHidden: 'map-hidden', asideVisible: 'aside-vis', buttonHid: 'button-hid'});
        }
    }
    registerListeners() {
        google.maps.event.addListener(this.map, 'idle', () => {
            const { north, south, east, west } = this.map.getBounds().toJSON();
            const bounds = {
                northEast: { lat: north, lng: east },
                southWest: { lat: south, lng: west } };
            this.props.updateFilter('bounds', bounds);
        });
    }

    render(){
        return(
            <div className="index-cont">
                <img className="index-search-background" src={window.index_search_background} />
                <ul className="index-search">
                    <li >
                        <i className="far fa-calendar"></i>
                        <input placeholder="Jul 31, 2019" type="text" />
                    </li>
                    <li >
                        <i className="far fa-clock"></i>
                        <input placeholder="7:00 PM" type="text" />
                    </li>
                    <li >
                        <i className="far fa-user"></i>
                        <input placeholder="2 people" type="number" />
                    </li>
                    <SearchBar page="index"/>
                </ul>

                <div className="index-content">
                    <div className="aside-cont">
                        <aside className={this.state.asideVisible}>
                            <div className="map-button">

                                <button onClick={this.handleClick}><i className="far fa-map"></i>&nbsp;&nbsp;Map</button>
                            </div>
                            <ul className="aside-checkbox">
                                <li className="checkbox-title">
                                    <i className="fas fa-map-marker-alt"> </i>  Neighborhood <br />
                                </li>
                                <li>
                                    <input type="checkbox" value="East Village" /> East Village <br />
                                </li>
                                <li>
                                    <input type="checkbox" value="Nolita" /> Nolita <br />
                                </li>
                                <li>
                                    <input type="checkbox" value="Greenwich Village" /> Greenwich Village <br />
                                </li>
                                <li>
                                    <input type="checkbox" value="Lower East Side" /> Lower East Side <br />
                                </li>
                                <li>
                                    <input type="checkbox" value="Chelsea" /> Chelsea <br />
                                </li>
                                <li>
                                    <p className="more">+ More</p>
                                </li>
                            </ul>
                            <ul className="aside-checkbox">
                                <li className="checkbox-title">
                                    <i className="fas fa-utensils"> </i>  Cuisines <br />
                                </li>
                                <li>
                                    <input type="checkbox" value="Italian" /> Italian <br />
                                </li>
                                <li>
                                    <input type="checkbox" value="American" /> American <br />
                                </li>
                                <li>
                                    <input type="checkbox" value="Seafood" /> Seafood <br />
                                </li>
                                <li>
                                    <input type="checkbox" value="Japanese" /> Japanese <br />
                                </li>
                                <li>
                                    <input type="checkbox" value="French" /> French <br />
                                </li>
                                <li>
                                    <p className="more">+ More</p>
                                </li>
                            </ul>
                        </aside>
                    </div>
                    <div className="index-cont">
  
                        <button className={this.state.buttonHid} onClick={this.handleClick}><i className="fa fa-list" aria-hidden="true"></i>&nbsp;&nbsp;List</button>

                        <RestaurantIndex restaurants={this.props.restaurants} />

                    </div>
                    <div className={this.state.mapHidden} ref="map">    
                    </div>
                </div>
            </div>  
        );
    }
}

export default Search;