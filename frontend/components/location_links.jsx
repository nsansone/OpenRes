import React from 'react';
import { connect } from 'react-redux';
import { updateFilter } from '../actions/filter_actions';
import { withRouter } from 'react-router-dom';



class LocationLinks extends React.Component {
  constructor(props) {
    super(props);
    this.state = { searchText: "" };
    this.handleClick = this.handleClick.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);
  }

  handleClick(page) {
    return (e) => {
      e.preventDefault();
      const pageText = e.target.innerText
      this.props.updateFilter("search", pageText ).then(() => {
        this.props.history.push({
          pathname: '/restaurants',
          fromPage: `${page}`,
          searchText: `${pageText}`
        });
      });
    };
  }

  handleKeyUp(page) {
    return (e) => {
      e.preventDefault();
      if (e.keyCode === 13) {
      const pageText = e.target.innerText
      this.props.updateFilter("search", pageText).then(() => {
        this.props.history.push({
          pathname: '/restaurants',
          fromPage: `${page}`,
          searchText: `${pageText}`
        });
      });
      }
    };
    
  }

  render() {
    return (
    <ul className="area-list">
        <li tabIndex="0" onClick={this.handleClick('homepage')} onKeyUp={this.handleKeyUp('homepage')}>
          <img src="https://loving-newyork.com/wp-content/uploads/2018/09/Things-to-do-in-the-east-village-180927123616018-1600x960.jpg" alt="East Village" />
          <p>East Village</p>
      </li>
        <li tabIndex="0" onClick={this.handleClick('homepage')} onKeyUp={this.handleKeyUp('homepage')}>
          <img src="https://citizen-femme.com/wp-content/uploads/2018/01/1487788417-midtown-manhattan-766x494.jpg" alt="Midtown " />
          <p>Midtown</p>
      </li>
        <li tabIndex="0" onClick={this.handleClick('homepage')} onKeyUp={this.handleKeyUp('homepage')}>
        <img src="https://cdn.vox-cdn.com/thumbor/8AnYlTm7fi2v1msdUeht9mzsd1k=/0x0:6000x4000/920x613/filters:focal(2520x1520:3480x2480):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/64823687/shutterstock_581905543.0.jpg" alt="Chelsea" />
        <p>Chelsea</p>
      </li>
        <li tabIndex="0" onClick={this.handleClick('homepage')} onKeyUp={this.handleKeyUp('homepage')}>
          <img src="https://loving-newyork.com/wp-content/uploads/2016/07/Brooklyn-Bridge_170614090305011-1600x960.jpg" alt="Brooklyn" />
        <p>Brooklyn</p>
      </li>
        <li tabIndex="0" onClick={this.handleClick('homepage')} onKeyUp={this.handleKeyUp('homepage')}>
          <img src="https://www.tripsavvy.com/thmb/cREDk7b9wOHZfugJ3e0xabtbA1Y=/2121x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/usa--new-york-city--manhattan--lower-east-side--typical-apartment-building-facades-with-external-staircases-575313898-5c20137bc9e77c0001071005.jpg" alt="Lower East Side" />
        <p>Lower East Side</p>
      </li>
        <li tabIndex="0" onClick={this.handleClick('homepage')} onKeyUp={this.handleKeyUp('homepage')}>
        <img src="https://media-cdn.tripadvisor.com/media/attractions-splice-spp-540x360/06/75/57/b7.jpg" alt="Flatiron" />
        <p>Flatiron</p>
      </li>
    </ul>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  updateFilter: (filter, value) => dispatch(updateFilter(filter, value))
})

export default connect(null, mapDispatchToProps)(withRouter(LocationLinks));