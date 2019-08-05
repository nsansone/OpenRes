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
                    <h1 className="scroll-title">Popular restaurants in Manhattan</h1>
                    <hr />
                    <ul className="scroll-list">
                        {restaurants}
                    </ul>
                <h1 className="scroll-title">Featured Areas</h1>
                <hr />
                <ul className="area-list">
                    <li>
                        <img src="https://loving-newyork.com/wp-content/uploads/2018/09/Things-to-do-in-the-east-village-180927123616018-1920x960.jpg" alt="East Village" />
                        <p>East Village</p>
                    </li>
                    <li>
                        <img src="https://citizen-femme.com/wp-content/uploads/2018/01/1487788417-midtown-manhattan-766x494.jpg" alt="" />
                        <p>Midtown</p>
                    </li>
                    <li>
                        <img src="https://cdn.vox-cdn.com/thumbor/8AnYlTm7fi2v1msdUeht9mzsd1k=/0x0:6000x4000/920x613/filters:focal(2520x1520:3480x2480):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/64823687/shutterstock_581905543.0.jpg" alt="" />
                        <p>Chelsea</p>
                    </li>
                    <li>
                        <img src="https://loving-newyork.com/wp-content/uploads/2016/07/Brooklyn-Bridge_170614090305011-1920x960.jpg" alt="" />
                        <p>Brooklyn</p>
                    </li>
                    <li>
                        <img src="https://images.ctfassets.net/ypfe9l9zihcg/3vqg9vDRLaIiWikq2mC0aY/6a44099b8530cbc643e852a7b145cdf2/upper_west_side_around_the_block_the_rental_market_2.jpg?fm=jpg&fl=progressive&q=85&w=900" alt="" />
                        <p>Upper West Side</p>
                    </li>
                    <li>
                        <img src="https://media-cdn.tripadvisor.com/media/attractions-splice-spp-540x360/06/75/57/b7.jpg" alt="" />
                        <p>Flatiron</p>
                    </li>
                </ul>

            </div>
        );
    }
}

export default ContentScroller;