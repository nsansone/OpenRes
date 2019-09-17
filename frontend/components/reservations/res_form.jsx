import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class ResForm extends React.Component {
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.handleKeyUp = this.handleKeyUp.bind(this);
        this.confirmRes = this.confirmRes.bind(this);
        const today = new Date()
        const year = String(today.getFullYear());
        const month = (today.getMonth() + 1) < 10 ? "0".concat(String(today.getMonth() + 1)) : String(today.getMonth() + 1);
        const day = (today.getDate() < 10) ? "0".concat(String(today.getDate())) : String(today.getDate());
        const user_id = this.props.user ? this.props.user.id : 0
        this.state = {
            user_id: user_id,
            restaurant_id: 0,
            date: year.concat("-").concat(month).concat("-").concat(day),
            time: "16:00:00",
            party_size: 2,
            hidden: "hidden",
            buttonHidden: "button-vis",
            buttonText: "Find a Table",
            confirm: "confirm-hid",
            pastRes: "past-res-hidden",
            time1: "1",
            time2: "2",
            time3: "3",
            time4: "4",
            time5: "5"
        };

    }



    componentDidUpdate(prevProps){
        if (this.props.user !== prevProps.user){
            const today = new Date()
            const year = String(today.getFullYear());
            const month = (today.getMonth() + 1) < 10 ? "0".concat(String(today.getMonth() + 1)) : String(today.getMonth() + 1);
            const day = (today.getDate() < 10) ? "0".concat(String(today.getDate())) : String(today.getDate());
            const user_id = this.props.user ? this.props.user.id : 0
            this.setState({
                user_id: user_id,
                restaurant_id: 0,
                date: year.concat("-").concat(month).concat("-").concat(day),
                time: "16:00:00",
                party_size: 2,
                hidden: "hidden",
                buttonHidden: "button-vis",
                buttonText: "Find a Table",
                confirm: "confirm-hid",
                pastRes: "past-res-hidden",
                time1: "1",
                time2: "2",
                time3: "3",
                time4: "4",
                time5: "5"
            });
        }
    }



    update(field){
        return (e) => {
            if (field === "party_size"){
                this.setState({ [field]: parseInt(e.target.value) });
            } else {
            this.setState({[field]: e.target.value});
            }
        };
    }

    confirmRes(e){
        e.preventDefault();

        if (!this.props.user) {
            this.setState({ hidden: 'hidden', confirm: "confirm-vis" });
        } else {
            const todaysDate = new Date();
            const resDate = Date.parse(this.state.date);
            const newToday = todaysDate.setDate(todaysDate.getDate() - 1);
            if (newToday > resDate) {
                this.setState({ hidden: 'hidden', pastRes: "past-res-vis" });
            } else {
                if (this.state.pastRes !== "past-res-vis") {
                    this.setState({ time: e.target.key });
                } else {
                    this.setState({pastRes: "past-res-hidden"});
                }
                const reservation = Object.assign(this.state, {restaurant_id: this.props.match.params.restaurantId, user_id: this.props.user.id });
                this.props.createReservation(reservation).then(this.setState({ hidden: 'hidden', confirm: "confirm-vis" }))
            }
        }
    }


    handleKeyUp(e){
        e.preventDefault();
        if (e.keyCode === 13) {
            if (!this.props.user) {
                this.setState({ hidden: 'hidden', confirm: "confirm-vis" });
            } else {
                const todaysDate = new Date();
                const resDate = Date.parse(this.state.date);
                const newToday = todaysDate.setDate(todaysDate.getDate() - 1);
                if (newToday > resDate) {
                    this.setState({ hidden: 'hidden', pastRes: "past-res-vis" });
                } else {
                    if (this.state.pastRes !== "past-res-vis"){
                        this.setState({ time: e.target.key });
                    } else {
                        this.setState({ pastRes: "past-res-hidden" });
                    }
                    const reservation = Object.assign(this.state, { restaurant_id: this.props.match.params.restaurantId, user_id: this.props.user.id });
                    this.props.createReservation(reservation).then(this.setState({ hidden: 'hidden', confirm: "confirm-vis" }))
                }
            }
        }
    }

    handleClick(e){
        e.preventDefault();
        this.pickTimes(this.state.time);
        this.setState({hidden: 'visible', buttonHidden: '.button-hid', buttonText: ""});
    }

    pickTimes(time){
        let timeArr = time.split(":");
        let hour = parseInt(timeArr[0]);
        this.setState({
            time1: String(hour-13).concat(":").concat(String(30)).concat(" PM"),      
            time2: String(hour-13).concat(":").concat(String(45)).concat(" PM"),       
            time3: String(hour-12).concat(":").concat("00").concat(" PM"),
            time4: String(hour-12).concat(":").concat(String(15)).concat(" PM"),       
            time5: String(hour-12).concat(":").concat(String(30)).concat(" PM") 
        });
    }

    render(){
        const resConfirm = !this.props.user ? <>Whoops! Please log in to make a reservation!</> : <>Your reservation has been confirmed! Please see your <Link to={`/users/${this.props.user.id}/profile`}>profile</Link> for details on upcoming reservations.</>
        return (
                <form className="make-res">
                    <h1>Make a reservation</h1>
                    <hr/>
                    <div className="res-cont">
                        <div className="res-party-cont">
                            <p className="res-party">Party Size</p>
                            <input onChange={this.update('party_size')} type="number" placeholder="For 2"/>
                        </div>
                        <div className="new-res-detail-container">
                            <div className="new-res-detail">
                                <p>Date</p>
                            <input className="res-date" onChange={this.update('date')} value={this.state.date} placeholder="Today" type="date" />
                            </div>
                            <div className="new-res-detail">
                                <p>Time</p>
                                <select className="res-date" onChange={this.update('time')}>
                                    <option value="16:00:00">4:00 PM</option>
                                    <option value="17:00:00">5:00 PM</option>
                                    <option value="18:00:00">6:00 PM</option>
                                    <option value="19:00:00">7:00 PM</option>
                                    <option value="20:00:00">8:00 PM</option>
                                    <option value="21:00:00">9:00 PM</option>
                                    <option value="22:00:00">10:00 PM</option>
                                    <option value="23:00:00">11:00 PM</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="res-search-submit">
                        <button onClick={this.handleClick} className={this.state.buttonHidden}>{this.state.buttonText}</button>
                        <p className={this.state.confirm}>{resConfirm}</p>
                        <p className={this.state.pastRes}>Whoops! Please select a date that has not already passed.</p>
                        <button className={this.state.pastRes} onClick={this.confirmRes} onKeyUp={this.handleKeyUp}>Confirm</button>
                        <div className={this.state.hidden}>
                            <p>Select a time:</p>
                            <ul className="hidden-cont">
                                <input onKeyUp={this.handleKeyUp} onClick={this.confirmRes} className="times" type="text" placeholder={this.state.time1} key={this.state.time1}/>
                                <input onKeyUp={this.handleKeyUp} onClick={this.confirmRes} className="times" type="text" placeholder={this.state.time2} key={this.state.time2} />
                                <input onKeyUp={this.handleKeyUp} onClick={this.confirmRes} className="times" type="text" placeholder={this.state.time3} key={this.state.time3} />
                                <input onKeyUp={this.handleKeyUp} onClick={this.confirmRes} className="times" type="text" placeholder={this.state.time4} key={this.state.time4} />
                                <input onKeyUp={this.handleKeyUp} onClick={this.confirmRes} className="times" type="text" placeholder={this.state.time5} key={this.state.time5} />
                            </ul>
                        </div>
                    </div>
                </form>
        )
    }
}


export default withRouter(ResForm);