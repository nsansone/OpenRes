import React from 'react';
import { withRouter } from 'react-router-dom';
import ResIndexItem from '../reservations/res_index_item';
import { deflateSync } from 'zlib';


class Profile extends React.Component {
    constructor(props){
        super(props);
        this.state= {
            time: new Date()
        };
    }
    componentDidMount(){
        this.props.fetchReservations();
    }



    render(){

        const pastReservations = this.props.reservations.map(reservation => {
            const todaysDate = this.state.time.getTime();
            const resDate = Date.parse(reservation.date)
            if (todaysDate > resDate) {
                return (
                    <ResIndexItem 
                        key={`resIndex-${reservation.id}`} 
                        reservation={reservation} 
                        restaurant={this.props.restaurants[reservation.restaurant_id]} 
                    />
                );
            }
        });

        const upcomingReservations = this.props.reservations.map(reservation => {
            const todaysDate = this.state.time.getTime();
            const resDate = Date.parse(reservation.date)
            if (todaysDate < resDate) {
                return (
                    <ResIndexItem
                        key={`resIndex-${reservation.id}`}
                        reservation={reservation}
                        restaurant={this.props.restaurants[reservation.restaurant_id]}
                    />
                );
            }
        });


        return (
            <div className="profile-cont">
                <h1 className="full-name">
                    {this.props.currentUser.fname}&nbsp;{this.props.currentUser.lname} 
                </h1>
                <hr/>
                <h1 className="section-titles">Upcoming Reservations</h1>
                <ul className="res-items">
                    {upcomingReservations}
                </ul>
                <h1 className="section-titles">Past Reservations</h1>
                <ul className="res-items">
                    {pastReservations}
                </ul>
            </div>
        );
       
    }
}

export default withRouter(Profile);
