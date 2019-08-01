import React from 'react';

const ResForm = () => {

    return (
            <form className="make-res">
                <h1>Make a reservation</h1>
                <hr/>
                <div className="res-cont">
                    <div className="res-party-cont">
                        <p className="res-party">Party Size</p>
                        <select>
                            <option value="For 1">For 1</option>
                            <option value="For 2">For 2</option>
                            <option value="For 3">For 3</option>
                            <option value="For 4">For 4</option>
                        </select>

                    </div>
                    <div className="new-res-detail-container">
                        <div className="new-res-detail">
                            <p>Date</p>
                            <input className="res-date" placeholder="Today" type="date" />
                        </div>
                        <div className="new-res-detail">
                            <p>Time</p>
                                <select>
                                    <option value="6:00 PM">6:00 PM</option>
                                    <option value="7:00 PM">7:00 PM</option>
                                    <option value="8:00 PM">8:00 PM</option>
                                    <option value="9:00 PM">9:00 PM</option>
                                </select>
                        </div>
                    </div>
                </div>
                <div className="res-search-submit">
                    <input type="submit" value="Find a Table" />
                </div>

            </form>
    )
}


export default ResForm;