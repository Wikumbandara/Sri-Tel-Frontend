import axios from "axios";

const API_URL = "http://localhost:8082/api/provision";


class packageService {
    getPackages() {
        return axios.get(API_URL + "/services").then((response) => {
            return response.data;
        });
    }

    activatePackage(payload) {
        payload.userId = localStorage.getItem("userId");
        console.log("PAYLOAD", payload);
        return axios.post(API_URL + "/activate", payload).then((response) => {
            return response.data;
        });
    }

    deactivatePackage(payload) {
        payload.userId = localStorage.getItem("userId");
        return axios.post(API_URL + "/deactivate", payload).then((response) => {
            return response.data;
        });
    }

    getSubscribedPackages() {
        let userId = localStorage.getItem("userId");
        return axios.get(API_URL + "/user/" +userId).then((response) => {
            return response.data;
        });
    }
}

export default new packageService();