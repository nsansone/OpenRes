import React from 'react';
import RestaurantDetail from './restaurant_detail';
import ResForm from './res_form';
import RestaurantMap from '../restaurant_map/restaurant_map';

class RestaurantShow extends React.Component {
    componentDidMount() {
        this.props.fetchRestaurant(this.props.match.params.restaurantId);
    }

    componentDidUpdate(prevProps){
        if (prevProps.match.params.restaurantId != this.props.match.params.restaurantId){
            this.props.fetchRestaurant(this.props.match.params.restaurantId);
        }
    }
  

    render(){
        const { restaurant } = this.props;
      
        
     

        return (
            <div className="show-cont">
                <img className="rest-background" src={restaurant.photoUrl} alt="" />
                <div className="show-body">
                    <main>
                        <RestaurantDetail restaurant={restaurant} />
                    </main>
                    <aside>
                        <div className="res-form-cont">

                            <ResForm />
                            <RestaurantMap />
                        </div>
                    </aside>
                </div>
            </div>
        )
    }

              
 
}

export default RestaurantShow;