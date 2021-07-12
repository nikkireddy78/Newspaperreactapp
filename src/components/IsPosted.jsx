import React, { Component } from 'react';
import AdvertisementService from './services/AdvertisementService';
import dateFormat from 'dateformat';
import Navbarss from './Navbars/LoginNavbar';
class IsPosted extends Component {
    constructor(props) {
        super(props)

        this.state =
        {
            Advertisements: [],
            IsPost: []
        }
        this.deleteAdvertisements = this.deleteAdvertisements.bind(this);
        this.PostImage = this.PostImage.bind(this);
    }
    PostImage(id) {
        let image = { id: id, isPosted: 0 };
        AdvertisementService.updateAdvertisement(image).then(result => {
            alert(" Post Removed");
            window.location = "/is-posted";

        })
    }

    componentDidMount() {
        AdvertisementService.getAdvertisement()
            .then((res) => {
                this.setState({ Advertisements: res.data });
                this.state.Advertisements.map(
                    advertisement => {
                        if (advertisement.isPosted === 1) {
                            this.setState({ IsPost: [...this.state.IsPost, advertisement] })
                        }
                    }
                )

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
                <Navbarss />
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
                                <th>Customer Name</th>
                                <th>Action</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                this.state.IsPost.map(
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
                                            <td>{advertisement.customer.custFirstName + " " + advertisement.customer.custLastName}</td>
                                            <td>
                                                <button className="buttonDashUp" onClick={() => this.PostImage(advertisement.id)} >Remove </button>
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

export default IsPosted;