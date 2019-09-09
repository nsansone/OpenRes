import React from 'react';
import { connect } from 'react-redux';
import { updateFilter } from '../actions/filter_actions';
import { withRouter } from 'react-router-dom';



class Checkboxes extends React.Component {
  constructor(props) {
    super(props);
    this.state = { searchText: "", checked: this.props.checked };
    
  }
  


  update(page) {
    return (e) => {

      const pageText = e.target.value
      const lastCheckedDup = this.props.checked.slice()
      if (lastCheckedDup.includes(pageText)){
        let idx = lastCheckedDup.indexOf(pageText)
        delete lastCheckedDup[idx]
        this.setState({checked: lastCheckedDup})
      } else {

        lastCheckedDup.push(pageText)
        this.setState({ checked: lastCheckedDup })
      }
      this.props.updateFilter("checked", lastCheckedDup)    
    }
  }

  render() {
    return (
      <div>
        {/* <form onChange={this.update("checkbox")}> */}
          <ul className="aside-checkbox">
            <li className="checkbox-title">
              <i className="fas fa-map-marker-alt"> </i>  Neighborhood <br />
            </li>
            <li>
              <input onChange={this.update("checkbox")} type="checkbox" value="East Village" /> East Village <br />
            </li>
            <li>
              <input onChange={this.update("checkbox")} type="checkbox" value="Chelsea" /> Chelsea <br />
            </li>
            <li>
              <input onChange={this.update("checkbox")}type="checkbox" value="Midtown" /> Midtown <br />
            </li>
            <li>
              <input onChange={this.update("checkbox")}type="checkbox" value="Lower East Side" /> Lower East Side <br />
            </li>
            <li>
              <input onChange={this.update("checkbox")} type="checkbox" value="Flatiron" /> Flatiron <br />
            </li>
            <li>
              <input onChange={this.update("checkbox")} type="checkbox" value="Brooklyn" /> Brooklyn <br />
            </li>
            {/* <li>
              <p className="more">+ More</p>
            </li> */}
          </ul>
        {/* </form> */}
        <ul className="aside-checkbox">
          <li className="checkbox-title">
            <i className="fas fa-utensils"> </i>  Cuisines <br />
          </li>
          <li>
            <input onChange={this.update("checkbox")} type="checkbox" value="Italian" /> Italian <br />
          </li>
          <li>
            <input onChange={this.update("checkbox")} type="checkbox" value="Asian" /> Asian <br />
          </li>
          <li>
            <input onChange={this.update("checkbox")} type="checkbox" value="Dessert" /> Dessert <br />
          </li>
          <li>
            <input onChange={this.update("checkbox")} type="checkbox" value="Deli" /> Deli <br />
          </li>
          <li>
            <input onChange={this.update("checkbox")} type="checkbox" value="French" /> French <br />
          </li>
          <li>
            <input onChange={this.update("checkbox")} type="checkbox" value="Bagels" /> Bagels <br />
          </li>
          {/* <li>
            <p className="more">+ More</p>
          </li> */}
        </ul>
      </div>

    );
  }
}

const mapStateToProps = state => {
  
  return({checked: state.ui.filters.checked})
}

const mapDispatchToProps = dispatch => ({
  updateFilter: (filter, value) => dispatch(updateFilter(filter, value))
})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Checkboxes));