import React from 'react';
import LocationGrid from '../location_links';
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
                    <h1 className="scroll-title">Popular restaurants in Manhattan</h1>
                    <hr />
                    <ul className="scroll-list">
                        {restaurants}
                    </ul>
                <h1 className="scroll-title">Featured Areas</h1>
                <hr />
                <LocationGrid />

            </div>
        );
    }
}

export default ContentScroller;