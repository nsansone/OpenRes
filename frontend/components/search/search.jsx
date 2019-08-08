import React from 'react';

import FilterForm from './filter_form';
import RestaurantMap from '../restaurant_map/restaurant_map';
import RestaurantIndex from './restaurant_index';
import { Link } from 'react-router-dom';
import SearchBar from './search_bar';

class Search extends React.Component {
    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.fetchRestaurants();
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

                    <aside>
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
                    <RestaurantIndex restaurants={this.props.restaurants} />
                    </div>
                <RestaurantMap restaurants={this.props.restaurants} updateFilter={this.props.updateFilter} singleRest={false}/>
            </div>  
        );
    }
}

export default Search;