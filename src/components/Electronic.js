import React, { Component } from 'react';
import './Cards.css';
import AdvertisementService from './services/AdvertisementService';
import Navbar from './Navbar';

class Electronic extends Component {
    constructor(props) {
        super(props);
        this.state = {
            advType: 'Electronics',
            Advertisements: []
        }
        this.changeAdvTypeHandler = this.changeAdvTypeHandler.bind(this);
    }

    changeAdvTypeHandler(event) {
        this.setState({ advType: event.target.value });
    }

    componentDidMount() {
        AdvertisementService.getImagesByType(this.state.advType)
            .then(res => {
                this.setState({ Advertisements: res.data });
            });

    }

    render() {
        return (
            <div>
                <Navbar />

                <div class="container">
                    <h2><center>Electronic Ads</center></h2>
                    <div class="row">
                        {
                            this.state.Advertisements.map(
                                advertisement =>
                                    <tr key={advertisement.id}>
                                        <img class="img-responsive" src={advertisement.link}
                                        alt="ads"  style={{ marginLeft: "50px" }} width="230px" height="250px"></img>
                                        <h4 className="text" style={{ marginLeft: "50px" }}><center>Location : {advertisement.advLocation}</center></h4>
                                    </tr>
                            )
                        }

                    </div>
                </div>
            </div>
        );
    }
}


export default Electronic;