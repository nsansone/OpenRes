import React from 'react';
import { connect } from 'react-redux';
import { updateFilter } from '../../actions/filter_actions';
import { withRouter } from 'react-router-dom';



class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = { searchText: "" };
        this.handleClick = this.handleClick.bind(this);
        this.handleKeyUp = this.handleKeyUp.bind(this);
    }

    update(field) {
        return (e) => {
            this.setState({ [field]: e.target.value });
        };
    }

    handleClick(page) {
        return (e) => {
            
            let searchText = this.state.searchText;
            this.props.updateFilter("search", this.state.searchText).then(() => {
                    this.props.history.push({
                        pathname: '/restaurants',
                        fromPage: `${page}`,
                        searchText: `${this.state.searchText}`
                    }); 
                


            });
        };
        
    }

    handleClickIndex(page) {
        return (e) => {

            let searchText = this.state.searchText;
            this.props.updateFilter("search", this.state.searchText)
            



 
        };

    }

    handleKeyUp(page){
        return (e) => {

            if (e.keyCode === 13){
                this.props.updateFilter("search", this.state.searchText).then(() => {
                        this.props.history.push({
                            pathname: '/restaurants',
                            fromPage: `${page}`,
                            searchText: `${this.state.searchText}`
                        });

                });
            }
        };
    }

    handleKeyUpIndex(page) {
        return (e) => {

            if (e.keyCode === 13) {
                this.props.updateFilter("search", this.state.searchText)
            }
        };
    }



    render() {
        if (this.props.page === "homepage") {
            return (
                <>
                    <div className="search-bar">
                        <i className="fas fa-search"></i>&nbsp;&nbsp;
                        <input id="hi" onKeyUp={this.handleKeyUp('homepage')} onChange={this.update('searchText')} placeholder="Location, Restaurant, or Cuisine" type="text" value={this.state.searchText} />
                    </div>
                    <div className="res-search-submit">
                        <a className="res-search-submit" onClick={this.handleClick('homepage')}>Let's go</a>
                    </div>
                </>
            )
        } else {
        return (
            <>
                <li className="index-search-bar">
                    <i className="fas fa-search"></i>&nbsp;&nbsp;
                <input onKeyUp={this.handleKeyUpIndex('index')} onChange={this.update('searchText')} placeholder="Location, Restaurant, or Cuisine" type="text" value={this.state.searchText} />
                </li>
                <li className="res-search-submit">
                    <a className="res-search-submit" onClick={this.handleClickIndex('index')}>Let's go</a>
                </li>
            </>
        );
        }
    }
}

const mapStateToProps = state => {
    return(
        {checked: state.ui.filters.checked}
    );
}

const mapDispatchToProps = dispatch => ({
    updateFilter: (filter, value) => dispatch(updateFilter(filter, value))

});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(SearchBar));