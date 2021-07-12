import React, { Component } from 'react';
import FeedbackService from './services/AddFeedbackservice';
import dateFormat from 'dateformat';
import Navbar from './Navbars/LoginNavbar';
class Viewfeedback extends Component {
    constructor(props) {
        super(props)

        this.state =
        {
            Feedback: []
        }
        this.deleteFeedback = this.deleteFeedback.bind(this);

    }

    componentDidMount() {
        FeedbackService.getFeedback()
            .then((res) => {
                this.setState({ Feedback: res.data });
            });

    }

    deleteFeedback(id) {
        FeedbackService.deleteAdvertisement(id).then((res) => {
            this.setState({ Feedback: this.state.Feedback.filter(Feedback => Feedback.id !== id) });
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

                    <h2 className="text-center">Feedback List</h2>

                    <div class="overflow-auto">
                        <table className="table table-striped table-bordered table-hover ">
                            <thead className="thead-dark">
                                <tr>
                                    <th>Feedback Id</th>
                                    <th>Customer ID</th>
                                    <th>Customer name</th>
                                    <th>Message</th>
                                    
                                </tr>
                            </thead>

                            <tbody>
                                {
                                    this.state.Feedback.map(
                                        feedback =>
                                            <tr key={feedback.feedId}>
                                                <td>{feedback.feedId}</td>
                                                <td>{feedback.customer.custId}</td>
                                                <td>{feedback.customer.custFirstName + " " + feedback.customer.custLastName}</td>
                                                <td>{feedback.message}</td>
                                                

                                                
                                               
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

export default Viewfeedback;