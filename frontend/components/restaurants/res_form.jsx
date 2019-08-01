import React from 'react';

const ResForm = () => {

    return (
            <form className="make-res">
                <h1>Make a reservation</h1>
                <hr/>
                <label className="new-res-detail">
                    Party Size
                    <input placeholder="For 2" type="text" />
                </label>
                <div className="new-res-detail-container">
                    <label className="new-res-detail">
                        Date
                        <input placeholder="Today" type="text" />
                    </label>
                    <label className="new-res-detail">
                        Time
                        <input placeholder="7:00 PM" type="text" />
                    </label>
                </div>
                <div className="res-search-submit">
                    <input type="submit" value="Find a Table" />
                </div>

            </form>
    )
}


export default ResForm;