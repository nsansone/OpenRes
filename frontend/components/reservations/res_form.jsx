import React from 'react';
import { withRouter } from 'react-router-dom';

class ResForm extends React.Component {
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            user_id: 0,
            restaurant_id: 0,
            date: "1999-08-08",
            time: "6:00 PM",
            party_size: 2,
            hidden: "hidden",
            buttonHidden: "button-vis",
            buttonText: "Find a Table"
        };

    }

    // componentDidMount(){
    
    //     // this.props.fetchRestaurant(this.props.match.params.restaurantId)
    //    this.setState({ restaurant_id: this.props.match.params.restaurantId });

    // }

    handleSubmit(e){
        e.preventDefault();
        const reservation = Object.assign(this.state, {restaurant_id: this.props.match.params.restaurantId})
        this.props.createReservation(reservation);

    }

    update(field){
        return (e) => {
            this.setState({[field]: e.target.value});
        };
    }

    handleClick(e){
        e.preventDefault();
        this.setState({hidden: 'visible', buttonHidden: '.button-hid', buttonText: ""})
        
    }



    render(){

        return (
                <form onSubmit={this.handleSubmit} className="make-res">
                    <h1>Make a reservation</h1>
                    <hr/>
                    <div className="res-cont">
                        <div className="res-party-cont">
                            <p className="res-party">Party Size</p>
                            <select>
                                <option onChange={this.update('party-size')} value="1">For 1</option>
                                <option onChange={this.update('party-size')}value="2">For 2</option>
                                <option onChange={this.update('party-size')}value="3">For 3</option>
                                <option onChange={this.update('party-size')}value="4">For 4</option>
                            </select>
    
                        </div>
                        <div className="new-res-detail-container">
                            <div className="new-res-detail">
                                <p>Date</p>
                                <input className="res-date" onChange={this.update('date')} value={this.state.date} placeholder="Today" type="date" />
                            </div>
                            <div className="new-res-detail">
                                <p>Time</p>
                                    <select>
                                        <option onChange={this.update('party-size')}value="18:00:00">6:00 PM</option>
                                        <option onChange={this.update('party-size')}value="19:00:00">7:00 PM</option>
                                        <option onChange={this.update('party-size')}value="20:00:00">8:00 PM</option>
                                        <option onChange={this.update('party-size')}value="21:00:00">9:00 PM</option>
                                    </select>
                            </div>
                        </div>
                    </div>
                    <div className="res-search-submit">
                        <button className={this.state.buttonHidden} onClick={this.handleClick}>{this.state.buttonText}</button>
                        <div className={this.state.hidden}>
                            <p>Select a time:</p>
                            <ul className="hidden-cont">
                                <input className="times"type="submit" value="6:15 PM"/>
                                <input className="times"type="submit" value="6:30 PM"/>
                                <input className="times"type="submit" value="6:45 PM"/>
                                <input className="times"type="submit" value="7:00 PM"/>
                                <input className="times"type="submit" value="7:15 PM"/>

                            </ul>
                        </div>

                    </div>
    
                </form>
        )
    }
}


export default withRouter(ResForm);