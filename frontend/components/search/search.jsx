import React from 'react';


import RestaurantMap from '../restaurant_map/restaurant_map';
import RestaurantIndex from '../restaurants/restaurant_index';

const Search = ({restaurants}) => (
    <div>
        hi =)
        <RestaurantMap restaurants={restaurants} />
        {/* <SearchIndex /> */}
    </div>
);

export default Search;