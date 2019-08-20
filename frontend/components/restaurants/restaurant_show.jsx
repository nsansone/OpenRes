import React from 'react';
import RestaurantDetail from './restaurant_detail';
import ResFormContainer from '../reservations/res_form_container';
import ShowRestaurantMap from '../restaurant_map/show_restaurant_map';
import { Link, Route } from 'react-router-dom';
import ReviewListItemContainer from '../reviews/review_list_item_container';



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
        const { restaurant, reviews } = this.props;
        const revHeader = reviews.length === 0 ? "No reviews yet!" : reviews.length === 1 ? `What 1 Person Is Saying`: `What ${reviews.length} People Are Saying`
        const reviewList = (reviews) => (
            reviews.map(review => (
                <ReviewListItemContainer review={review} key={review.id} />
            ))
        );
      
        
        const reviewButton = this.props.session.id ? <Link to={`/restaurants/${restaurant.id}/review`}>Leave a review</Link> : <div></div>
        
        return (
            <div className="show-cont">
                <img className="rest-background" src={restaurant.photoUrl} alt="" />
                <div className="show-body">
                    <main className="show-main">
                        <RestaurantDetail restaurant={restaurant} reviews={reviews} />
                        <h2>{revHeader}</h2>
                        {reviewButton}
                        <hr />
                        {reviewList(reviews)}
                    </main>
                    <aside>
                        <div className="res-form-cont">

                            <ResFormContainer restaurantId={restaurant.id} />
                        </div>
                        <div className="map-cont">
                            <ShowRestaurantMap restaurant={restaurant} 
                                    fetchRestaurant={this.props.fetchRestaurant} 
                                    singleRestaurant={true} 
                                    restaurantId={restaurant.id}
                            />                   
                            <p className="map-address">
                                <i className="fas fa-map-marker-alt"></i>  {this.props.restaurant.address}
                            </p>
                        </div>
                    </aside>
                </div>
            </div>
        )
    }

              
 
}

export default RestaurantShow;