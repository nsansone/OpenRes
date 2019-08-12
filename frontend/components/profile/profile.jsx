import React from 'react';
import { withRouter } from 'react-router-dom';
import ResIndexItem from '../reservations/res_index_item';


class Profile extends React.Component {
    constructor(props){
        super(props);
        this.state= {
            date: new Date()
        };
    }
    componentDidMount(){
        this.props.fetchReservations();
    }



    render(){
 
        const pastReservations = this.props.reservations.map(reservation => {
            const todaysDate = new Date();
            // const resHour = parseInt(reservation.time.split(":")[0])
            const resDate = Date.parse(reservation.date);
            const newToday = todaysDate.setDate(todaysDate.getDate() - 1)
            if (newToday > resDate) {
                return (
                    <ResIndexItem 
                        key={`past-resIndex-${reservation.id}`} 
                        reservation={reservation} 
                        restaurant={this.props.restaurants[reservation.restaurant_id]} 
                    />
                );
            }
        });

        const upcomingReservations = this.props.reservations.map(reservation => {
            const todaysDate = new Date();
            const newToday = todaysDate.setDate(todaysDate.getDate() - 1)
            const resDate = Date.parse(reservation.date)
            if (newToday < resDate) {
                return (
                        <ResIndexItem 
                            key={`upcoming-resIndex-${reservation.id}`} 
                            reservation={reservation} restaurant={this.props.restaurants[reservation.restaurant_id]} 
                            deleteReservation={this.props.deleteReservation}
                        />
                );
            }

        });


        return (
            <div className="profile-cont">
                <div className="name-cont">
                    <h1 className="full-name">
                        {this.props.currentUser.fname}&nbsp;{this.props.currentUser.lname} 
                    </h1>
                    <hr/>
                </div>
                <ul className="res-item-cont">
                    <h1 className="section-titles">Upcoming Reservations</h1>
                    <hr/>
                    {upcomingReservations}
                </ul>
                <ul className="res-item-cont">
                    <h1 className="section-titles">Past Reservations</h1>
                    <hr/>
                    {pastReservations}
                </ul>
            </div>
        );
       
    }
}

export default withRouter(Profile);
