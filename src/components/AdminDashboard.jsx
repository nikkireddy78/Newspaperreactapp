import React, { Component } from "react";
import { Link } from "react-router-dom";
import LogoutNavbar from '../components/LogoutNavbar';
let data = localStorage.getItem('staff');
data = JSON.parse(data);
class AdminDashboard extends Component {
    render() {
        return (
            <div>

                <LogoutNavbar />
                <div className='container'>
                    <p class="text-left">Logged as : {data.email}</p>
                    <p class="text-left">Role : {data.role}</p>
                    <div>
                        <Link to="/list-advertisement"><button class="buttonDash">Show All</button></Link>
                        <Link to="/is-posted"> <button class="buttonDash">Posted Ads</button></Link>
                        <Link to="/not-posted"> <button class="buttonDash">Not Posted Ads</button></Link>
                        <Link to="/view-feedback"> <button class="buttonDash">View Feedback</button></Link>
                    </div>

                </div>

            </div>
        )
    }


}
export default AdminDashboard;
