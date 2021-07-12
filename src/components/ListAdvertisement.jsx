import React, { Component } from 'react';
import AdvertisementService from './services/AdvertisementService';
import dateFormat from 'dateformat';
import Navbar from './Navbars/LoginNavbar';
class ListAdvertisementComponent extends Component {
    constructor(props) {
        super(props)

        this.state =
        {
            Advertisements: []
        }
        this.deleteAdvertisements = this.deleteAdvertisements.bind(this);

    }

    componentDidMount() {
        AdvertisementService.getAdvertisement()
            .then((res) => {
                this.setState({ Advertisements: res.data });
            });

    }

    deleteAdvertisements(id) {
        AdvertisementService.deleteAdvertisement(id).then((res) => {
            this.setState({ Advertisements: this.state.Advertisements.filter(advertisement => advertisement.id !== id) });
        });
    }
    dateFormatHandler = (startDate) => {
        return dateFormat(startDate, "dd-mm-yyyy");
    }


    render() {
        return (

            <div>
                <Navbar />
                <div className="container-fluid">

                    <h2 className="text-center">Advertisement List</h2>

                    <div class="overflow-auto">
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
                                    <th>Customer ID</th>
                                    <th>Image URL</th>
                                    <th>Delete</th>
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
                                                <td>{this.dateFormatHandler(advertisement.startDate)}</td>
                                                <td>{this.dateFormatHandler(advertisement.endDate)}</td>
                                                <td>{advertisement.advName}</td>
                                                <td>{advertisement.imageStatus}</td>
                                                <td>{advertisement.customer.custId}</td>

                                                <td><a href={advertisement.link} ><button class="btn btn-primary"><i class="fa fa-download"></i> Download</button></a></td>

                                                <td>
                                                    <button style={{ marginLeft: "10px" }} onClick={() => this.deleteAdvertisements(advertisement.id)}
                                                        className="btn btn-danger">Delete</button>
                                                </td>
                                            </tr>
                                    )
                                }


                            </tbody>

                        </table>
                    </div>
                </div>
            </div>
        );
    }
}

export default ListAdvertisementComponent;