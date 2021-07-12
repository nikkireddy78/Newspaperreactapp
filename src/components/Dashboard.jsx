import React, { Component } from 'react';
import AdvertisementService from './services/AdvertisementService';
import dateFormat from 'dateformat';
import LogoutNavbar from '../components/Navbars/logNavbar';
import { Link } from 'react-router-dom';

let data = localStorage.getItem('customer');
data = JSON.parse(data);

class CustomerAdvertisement extends Component {

    constructor(props) {
        super(props)

        this.state =
        {
            Advertisements: []

        }
        this.addAdvertisement = this.addAdvertisement.bind(this);
        this.addFeedback = this.addFeedback.bind(this);
        this.uploadImage = this.uploadImage.bind(this);

    }
    uploadImage(id) {
        this.props.history.push('/upload-image');
        localStorage.setItem("AdId", id);
    }

    componentDidMount() {
        let data = localStorage.getItem('customer');
        data = JSON.parse(data);
        let email = data.email;
        AdvertisementService.getAdvertisementByEmail(email)
            .then((res) => {
                this.setState({ Advertisements: res.data });
            });


    }


    addAdvertisement() {

        this.props.history.push('/add-advertisement');
    }
    addFeedback() {

        this.props.history.push('/add-feedback');
    }

    dateFormatHandler = (startDate) => {
        return dateFormat(startDate, "dd-mm-yyyy");
    }

    render() {
        var imageStatus = this.state.imageStatus;
        console.log(imageStatus);
        return (
            <div>

                <LogoutNavbar />
                <br></br>
                <h3 className="text-center">YOUR ADVERTISEMENT'S</h3>
                <div className="container">

                    <p className='text-left'><i class="fa fa-user" aria-hidden="true"></i> Logged as : {data.email}</p>

                    <Link to="/change-password"><button className="buttonDash" >Change Password</button></Link>
                    &nbsp;
                    <button className="buttonDash" onClick={this.addAdvertisement}>Add Advertisement</button>
                    &nbsp;
                    <button className="buttonDash" onClick={this.addFeedback}>Give Feedback</button>
                </div>

                <div className="container ">
                    <table className="table table-striped table-bordered table-hover ">
                        <thead className="thead-dark">
                            <tr>
                                <th>Advertisement Id</th>
                                <th>Location</th>
                                <th>Type</th>
                                <th>Created By</th>
                                <th>Start Date</th>
                                <th>End Date</th>
                                <th>Advertisement Name</th>
                                <th>Status</th>
                                <th>Upload Image</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                this.state.Advertisements.map(
                                    advertisement =>
                                        <tr key={advertisement.id}>
                                            <td>{advertisement.id}</td>
                                            <td>{advertisement.advLocation}</td>
                                            <td>{advertisement.advType}</td>
                                            <td>{advertisement.createdBy}</td>
                                            <td >{this.dateFormatHandler(advertisement.startDate)}</td>
                                            <td>{this.dateFormatHandler(advertisement.endDate)}</td>
                                            <td>{advertisement.advName}</td>
                                            <td>{advertisement.imageStatus}</td>


                                            <td>
                                                <button className="buttonDashUp" style={{ marginLeft: "10px" }} onClick={() => this.uploadImage(advertisement.id)} >Upload Image</button>
                                            </td>
                                        </tr>
                                )
                            }


                        </tbody>

                    </table>

                </div>

            </div>
        );
    }
}

export default CustomerAdvertisement;