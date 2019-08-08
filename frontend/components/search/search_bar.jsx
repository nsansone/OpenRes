import React from 'react';
import { connect } from 'react-redux';
import { fetchRestaurants } from '../../actions/restaurant_actions';
import { updateFilter } from '../../actions/filter_actions';
import { withRouter } from 'react-router-dom';



class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = { searchText: "" };
        this.handleClick = this.handleClick.bind(this);
    }

    update(field) {
        return (e) => {
            this.setState({ [field]: e.target.value });
        };
    }

    handleClick(e) {
        e.preventDefault()
        this.props.updateFilter("search", this.state.searchText).then(() => {
            if (this.props.page === "homepage"){
                this.props.history.push('/restaurants'); 
            }
        });
    }

    render() {
        if (this.props.page === "homepage") {
            return (
                <>
                    <div className="search-bar">
                        <i className="fas fa-search"></i>&nbsp;&nbsp;
                        <input onChange={this.update('searchText')} placeholder="Location, Restaurant, or Cuisine" type="text" value={this.state.searchText} />
                    </div>
                    <div className="res-search-submit">
                        <a className="res-search-submit" onClick={this.handleClick}>Let's go</a>
                    </div>
                </>
            )
        } else {
        return (
            <>
                <li className="index-search-bar">
                    <i className="fas fa-search"></i>&nbsp;&nbsp;
                <input onChange={this.update('searchText')} placeholder="Location, Restaurant, or Cuisine" type="text" value={this.state.searchText} />
                </li>
                <li className="res-search-submit">
                    <a className="res-search-submit" onClick={this.handleClick}>Let's go</a>
                </li>
            </>
        );
        }
    }
}

const mapDispatchToProps = dispatch => ({
    updateFilter: (filter, value) => dispatch(updateFilter(filter, value))

})

export default connect(null, mapDispatchToProps)(withRouter(SearchBar));