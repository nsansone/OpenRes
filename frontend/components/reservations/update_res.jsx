

import React from 'react';
import { withRouter } from 'react-router-dom';

class UpdateRes extends React.Component {
  constructor(props) {
    super(props);
    const today = new Date()
    const year = String(today.getFullYear());
    const month = (today.getMonth() + 1) < 10 ? "0".concat(String(today.getMonth() + 1)) : String(today.getMonth() + 1);
    const day = (today.getDate() < 10) ? "0".concat(String(today.getDate())) : String(today.getDate());
    const user_id = this.props.currentUser ? this.props.currentUser.id : 0
    this.state = {
      user_id: user_id,
      restaurant_id: 0,
      date: year.concat("-").concat(month).concat("-").concat(day),
      time: "16:00:00",
      party_size: 2,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.goToProfile = this.goToProfile.bind(this);
    
    
  }
  componentDidMount() {
  
    this.props.fetchReservation(parseInt(this.props.match.params.reservationId))
    
  }

  goToProfile() {
    this.props.history.push(`/users/${this.props.currentUser.id}/profile`);
  }
  handleSubmit(e) {
    e.preventDefault();
    const reservation = Object.assign(this.state, { restaurant_id: this.props.reservation.restaurant_id, user_id: this.props.currentUser.id });
    
    this.props.updateReservation(reservation).then(this.goToProfile);
    
  }


  update(field) {
    return (e) => {
      if (field === "party_size") {
        this.setState({ [field]: parseInt(e.target.value) });

      } else {
        this.setState({ [field]: e.target.value });
      }

    };
  }

  // handleClick2(e) {
  //   e.preventDefault();

  //   if (!this.props.user) {
  //     this.setState({ hidden: 'hidden', confirm: "confirm-vis" });
  //   } else {

  //     const todaysDate = new Date();
  //     const resDate = Date.parse(this.state.date);
  //     const newToday = todaysDate.setDate(todaysDate.getDate() - 1);

  //     if (newToday > resDate) {
  //       this.setState({ hidden: 'hidden', pastRes: "past-res-vis" });
  //     } else {

  //       this.setState({ time: e.target.key });
  //       const reservation = Object.assign(this.state, { restaurant_id: this.props.match.params.restaurantId, user_id: this.props.user.id });
  //       this.props.createReservation(reservation).then(this.setState({ hidden: 'hidden', confirm: "confirm-vis" }))
  //     }
  //   }
  // }



  render() {
    
    let timeArr = this.state.time.split(":");
    let hour = parseInt(timeArr[0]);
    let time1 = String(hour - 13).concat(":").concat(String(30)).concat(" PM");
    let time2 = String(hour - 13).concat(":").concat(String(45)).concat(" PM");
    let time3 = String(hour - 12).concat(":").concat("00").concat(" PM");
    let time4 = String(hour - 12).concat(":").concat(String(15)).concat(" PM");
    let time5 = String(hour - 12).concat(":").concat(String(30)).concat(" PM");
    
    return (

      <form className = "make-res" onSubmit = { this.handleSubmit }>
        <h1>Update your reservation</h1>
        <hr />
        <div className="res-cont">
          <div className="res-party-cont">
            <p className="res-party">Party Size</p>
            <input onChange={this.update('party_size')} type="number" placeholder="For 2" />
          </div>
          <div className="new-res-detail-container">
            <div className="new-res-detail">
              <p>Date</p>
              <input className="res-date" onChange={this.update('date')} value={this.state.date} placeholder="Today" type="date" />
            </div>
            <div className="new-res-detail">
              <p>Time</p>
              <select className="res-date" onChange={this.update('time')}>
                <option value={this.state.time1}>{time1}</option>
                <option value={this.state.time2}>{time2}</option>
                <option value={this.state.time3}>{time3}</option>
                <option value={this.state.time4}>{time4}</option>
                <option value={this.state.time5}>{time5}</option>
              </select>
            </div>
          </div>
          <input type="submit" value="update reservation"/>
        </div>
      </form>
    )
  }
}
export default withRouter(UpdateRes);