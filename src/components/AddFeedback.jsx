import React, { Component } from 'react';
import FeedbackService from './services/AddFeedbackservice';
class AddFeedback extends Component {

    constructor(props) {
        super(props);
        this.state = {
            custId: 0,
            feedId: '',
            message: '',
        }

        this.changeMessageHandler = this.changeMessageHandler.bind(this);
        

        this.saveFeedback = this.saveFeedback.bind(this);
    }
    componentDidMount() {
        let data = localStorage.getItem('customer');
        data = JSON.parse(data);
        let email = data.email;
        FeedbackService.getIdByEmail(email).then(res => {
            this.setState({ custId: parseInt(res.data) });

        });
    }

    saveFeedback = (e) => {
        e.preventDefault();

        let feedback = {
            custId: this.state.custId,
            feedId: null, message: this.state.message 

        };
        console.log(JSON.stringify(feedback));
        FeedbackService.createFeedback(feedback).then(res => {

            this.setState({ feedId: res.data });
            localStorage.setItem("AdId", this.state.feedId);
            this.props.history.push('/dashboard');
            
        })
    }


    cancel() {
        this.props.history.push('/dashboard');
    }

    

    changeMessageHandler = (event) => {
        this.setState({ message: event.target.value });
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
                            <h3 className="text-center">Give Feedback</h3>
                            <div className="card-body">
                                <fieldset>
                                    <form>
                                        

                                        <div className="form-group">
                                            <label>Enter Message</label>
                                            <input placeholder="Enter Message"
                                                name="message"
                                                className="form-control"
                                                value={this.state.message}
                                                onChange={this.changeMessageHandler} />
                                        </div>
                                        <button className="btn btn-success" onClick={this.saveFeedback}>Save</button>
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
                    <p feedId="cookie"></p>
                </div>
            </div>
        );
    }
}



export default AddFeedback;