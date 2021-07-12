import axios from 'axios';

const Advertisement_API_BASE_URL = "http://localhost:8081/springfox/api/advertisement";

class AdvertisementService {
    getAdvertisement() {
        return axios.get(Advertisement_API_BASE_URL + '/');
    }

    createAdvertisement(advertisement) {
        return axios.post(Advertisement_API_BASE_URL + '/', advertisement);
    }

    getAdvertisementById(Id) {
        return axios.get(Advertisement_API_BASE_URL + '/' + Id);
    }
    getImagesByType(advType) {
        return axios.get(Advertisement_API_BASE_URL + '/image/' + advType);
    }

    updateAdvertisement(advertisement) {
        return axios.put(Advertisement_API_BASE_URL + '/', advertisement);
    }

    deleteAdvertisement(Id) {
        return axios.delete(Advertisement_API_BASE_URL + '/' + Id);
    }
    uploadImage(Id) {

        return axios.put(Advertisement_API_BASE_URL + '/upload' + Id)
    }
    getIdByEmail(email) {
        return axios.get(Advertisement_API_BASE_URL + '/email/' + email);
    }
    getAdvertisementByEmail(email) {
        return axios.get(Advertisement_API_BASE_URL + '/customer/' + email);
    }
}

export default new AdvertisementService();