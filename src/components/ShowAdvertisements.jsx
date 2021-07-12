import React, { Component } from 'react';
import AdvertisementService from './services/AdvertisementService';
import dateFormat from 'dateformat';
import './Cards.css';
import Navbar from './Navbar';
import '../css/ViewAds.css';
class ShowAdvertisements extends Component {
    constructor(props) {
        super(props)

        this.state =
        {
            Advertisements: [],
            IsPost:[]
        }


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



    dateFormatHandler = (startDate) => {
        return dateFormat(startDate, "dd-mm-yyyy");
    }

    render() {
        return (

            <div>
                <Navbar />



                <div class="container">
                    <div class="row">
                        {
                            this.state.IsPost.map(
                                advertisement =>
                                    <tr key={advertisement.id}>
                                        <img class="img-responsive" src={advertisement.link} alt="ads"
                                            style={{ marginLeft: "50px" }} width="260px" height="250px"></img>
                                            <center>
                                        <h4 className="text" style={{ marginLeft: "40px" }}>Category : {advertisement.advType}</h4>
                                        <h4 className="text" style={{ marginLeft: "40px" }}>Location : {advertisement.advLocation}</h4>
                                        </center>
                                   <br></br>

                                    </tr>
                            )
                        }


                    </div>
                </div>
            </div>


        );
    }
}


export default ShowAdvertisements;