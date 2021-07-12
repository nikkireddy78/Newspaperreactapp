import React, { Component } from 'react';
import AdvertisementService from './services/AdvertisementService';
class CreateAdvertisementComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            custId: 0,
            id: '',
            advType: '',
            advLocation: '',
            createdBy: '',
            startDate: '',
            endDate: '',
            advImage: ''
        }

        this.changeAdvTypeHandler = this.changeAdvTypeHandler.bind(this);
        this.changeAdvLocationHandler = this.changeAdvLocationHandler.bind(this);
        this.changeCreatedByHandler = this.changeCreatedByHandler.bind(this);
        this.changeStartDateHandler = this.changeStartDateHandler.bind(this);
        this.changeEndDateHandler = this.changeEndDateHandler.bind(this);
        this.changeAdvImageHandler = this.changeAdvImageHandler.bind(this);

        this.saveAdvertisement = this.saveAdvertisement.bind(this);
    }
    componentDidMount() {
        let data = localStorage.getItem('customer');
        data = JSON.parse(data);
        let email = data.email;
        AdvertisementService.getIdByEmail(email).then(res => {
            this.setState({ custId: parseInt(res.data) });

        });
    }

    saveAdvertisement = (e) => {
        e.preventDefault();

        let advertisement = {
            custId: this.state.custId,
            id: null, advType: this.state.advType, advLocation: this.state.advLocation,
            createdBy: this.state.createdBy, startDate: this.state.startDate, endDate: this.state.endDate

        };
        console.log(JSON.stringify(advertisement));
        AdvertisementService.createAdvertisement(advertisement).then(res => {

            this.setState({ id: res.data });
            localStorage.setItem("AdId", this.state.id);
            if (this.state.createdBy === "Own") {

                if (window.confirm("Proceed to upload image?")) {

                    this.props.history.push('/upload-image');

                }
                else {
                    this.props.history.push('/dashboard');
                }
            }
            else if (this.state.createdBy === "Ops Team") {
                alert("Advertisement created")
                this.props.history.push('/advertisement');
            }

        })
    }


    cancel() {
        this.props.history.push('/dashboard');
    }

    uploadImage() {
        this.props.history.push('/upload-image');
    }

    changeAdvTypeHandler = (event) => {
        this.setState({ advType: event.target.value });
    }

    changeAdvLocationHandler = (event) => {
        this.setState({ advLocation: event.target.value });
    }

    changeCreatedByHandler = (event) => {
        this.setState({ createdBy: event.target.value });
    }

    changeStartDateHandler = (event) => {
        this.setState({ startDate: event.target.value });
    }

    changeEndDateHandler = (event) => {
        this.setState({ endDate: event.target.value });
    }



    changeAdvImageHandler = (event) => {
        this.setState({ advImage: event.target.value });
    }


    render() {
        return (
            <div>
                <div>
                    <p></p>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">Add Advertisement</h3>
                            <div className="card-body">
                                <fieldset>
                                    <form>
                                        <div className="form-group">
                                            <label>Select Advertisement Type</label>
                                            <select name="advType"
                                                className="form-control" value={this.state.advType}
                                                onChange={this.changeAdvTypeHandler}>
                                                <option value="Choose">Choose Advertisement Type</option>
                                                <option value="Electronics">Electronics</option>
                                                <option value="Hotel">Hotel</option>
                                                <option value="Restaurant and Bars">Restaurant and Bars</option>
                                                <option value="Jobs">Jobs</option>
                                                <option value="Clothing">Clothing</option>
                                            </select>
                                        </div>

                                        <div className="form-group">
                                            <label>Enter Location</label>
                                            <input placeholder="Advertisement Location"
                                                name="advLocation"
                                                className="form-control"
                                                value={this.state.advLocation}
                                                onChange={this.changeAdvLocationHandler} />
                                        </div>

                                        <div className="form-group">
                                            <label>Select Created By</label><br></br>
                                            <input type="radio" name="createdBy" id='createdBy'
                                                value="Own" style={{ marginRight: '15px' }}
                                                onChange={this.changeCreatedByHandler}
                                                onClick={this.changeOwnHandler} />
                                            <label> Own</label><br></br>
                                            <input type="radio" name="createdBy"
                                                value="Ops Team" style={{ marginRight: '15px' }}
                                                onChange={this.changeCreatedByHandler}
                                                onClick={this.changeOpsTeamHandler} />
                                            <label> Operational Team</label>
                                        </div>

                                        <div className="form-group">
                                            <label>Select Start Date</label>
                                            <input type="date" name="startDate"
                                                className="form-control"
                                                value={this.state.startDate}
                                                onChange={this.changeStartDateHandler} />
                                        </div>

                                        <div className="form-group">
                                            <label>Select End Date</label>
                                            <input type="date" name="endDate"
                                                className="form-control" value={this.state.endDate}
                                                onChange={this.changeEndDateHandler} />
                                        </div>



                                        <button className="btn btn-success" onClick={this.saveAdvertisement}>Save</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{ marginLeft: "10px" }}>Cancel</button>

                                    </form>

                                </fieldset>
                            </div>
                        </div>
                    </div>

                </div>
                <div>

                </div>
                <div>
                    <p id="cookie"></p>
                </div>
            </div>
        );
    }
}



export default CreateAdvertisementComponent;