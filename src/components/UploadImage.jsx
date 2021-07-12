
import React, { Component } from 'react';
import axios from 'axios';
import AdvertisementService from './services/AdvertisementService';

class UploadImage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: 0,
            advImage: null
        }
        this.handleChangeId = this.handleChangeId.bind(this);
        this.changeAdvImageHandler = this.changeAdvImageHandler.bind(this);
        this.saveAdvertisement = this.saveAdvertisement.bind(this);


    }

    componentDidMount() {

        this.state.id = JSON.parse(localStorage.getItem('AdId'));
      

    }

    handleChangeId(event) {
        this.setState({ id: event.target.value });
    }

    saveAdvertisement = (e) => {
        e.preventDefault();

        let form_data = new FormData();
        form_data.append('file', this.state.image, this.state.image.name);
        let url = 'http://ec2-52-206-64-28.compute-1.amazonaws.com:8081/springfox/api/advertisement/upload/' + this.state.id;
        axios.put(url, form_data, {
            headers: {
                'content-type': 'multipart/form-data'
            }

        })
            .then(res => {
                let image = { id: this.state.id, link: res.data };
                AdvertisementService.updateAdvertisement(image).then(result => {
                   
                })
                console.log(res.data);
                alert("Image Upload Successfully");
                localStorage.removeItem('AdId');

                window.location = "/dashboard";

            })
            .catch(err => console.log(err))
    };


    cancel() {
        this.props.history.push('/dashboard');
    }

    changeAdvImageHandler = (event) => {
        this.setState({ image: event.target.files[0] });
    }

    render() {
        return (
            <div style={{ padding: 20 }}>

                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">Add Advertisement</h3>
                            <div className="card-body">
                                <fieldset>
                                    <form>

                                        <div className="form-group">
                                            <label>Select Image</label>
                                            <input type="file" name="advImage" id="advImage"
                                                className="form-control" value={this.state.advImage} accept="image/png, image/jpeg"
                                                onChange={this.changeAdvImageHandler} required />
                                        </div>

                                        <button className="btn btn-success" onClick={this.saveAdvertisement}>Save</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{ marginLeft: "10px" }}>Cancel</button>

                                    </form>
                                </fieldset>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}
export default UploadImage;