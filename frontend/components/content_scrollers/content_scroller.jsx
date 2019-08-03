import React from 'react';
import ContentScrollerDetail from '../content_scrollers/content_scroller_detail';

class ContentScroller extends React.Component {
    componentDidMount() {
        this.props.fetchRestaurants();
    }
    
    render() {
        const restaurants = this.props.restaurants.map(restaurant => {
            return (
                    <ContentScrollerDetail key={`index-${restaurant.id}`} restaurant={restaurant} />
            );
        });

        return (
            <div className="scroll-cont">
                    <h1 className="scroll-title">Popular restaurants in Manhatten</h1>
                    <hr />
                    <ul className="scroll-list">
                        {restaurants}
                    </ul>
            </div>
        );
    }
}

export default ContentScroller;