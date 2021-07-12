import axios from 'axios';

const Advertisement_API_BASE_URL = "http://localhost:8081/springfox/api/feedback";

class AddFeedbackService {
    getFeedback() {
        return axios.get(Advertisement_API_BASE_URL + '/');
    }

    createFeedback(feedback) {
        return axios.post(Advertisement_API_BASE_URL + '/', feedback);
    }

    getFeedbackById(Id) {
        return axios.get(Advertisement_API_BASE_URL + '/' + Id);
    }
    

    getIdByEmail(email) {
        return axios.get(Advertisement_API_BASE_URL + '/email/' + email);
    }
    getFeedbackByEmail(email) {
        return axios.get(Advertisement_API_BASE_URL + '/customer/' + email);
    }
}

export default new AddFeedbackService();