import axios from "axios";

const API_URL = "http://localhost:8083/api/billing";

class billService {
    getBills() {
        const userId = localStorage.getItem("userId");
        return axios.get(API_URL + "/user/" + userId).then((response) => {
            return response.data; 
        });
    }

    getLatestBill() {
        const userId = localStorage.getItem("userId");
        return axios.get(API_URL + "/user/latest/" + userId).then((response) => {
            return response.data;
        });
    }

}

export default new billService();