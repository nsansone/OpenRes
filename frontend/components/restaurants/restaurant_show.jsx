import React from 'react';
import { Link } from 'react-router-dom';
import RestaurantDetail from './restaurant_detail';
import ResForm from './res_form';


const RestaurantShow = ({ restaurant, restaurantId, }) => {
    const restaurants = ({
        [restaurantId]: restaurant
    });



    return (
        <div className="show-cont">
            <div className="rest-background">
            </div>
            <div className="show-body">
                <main>
                    <RestaurantDetail restaurant={restaurant} />
                    <Link to="/">All Restaurants</Link>
                </main>
                <aside>
                    <ResForm />
                </aside>
            </div>
        </div>
    )
              
 
}

export default RestaurantShow;