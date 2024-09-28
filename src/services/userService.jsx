import axios from "axios";

const API_URL = "http://localhost:8081/api/users";


class userService {
    register(payload) {
        console.log("PAYLOAD", payload);
        return axios.post(API_URL + "/register", payload).then((response) => {
            console.log("RESPONSE", response.data);
            return response.data;
        });
    }

    login(payload) {
        console.log("PAYLOAD", payload);
        return axios.post(API_URL + "/login", payload).then((response) => {
            console.log("RESPONSE", response.data);

            if (response.data) {
                localStorage.setItem("user", JSON.stringify(response.data.user));
                localStorage.setItem("userId", response.data.user.id);
                localStorage.setItem("token", response.data.token);
            }

            return response.data;
        });
    }

    forgetPassword(payload) {
        console.log("PAYLOAD", payload.email);
        return axios.post(API_URL + "/forget-password?email=" + payload.email).then((response) => {
            console.log("RESPONSE", response.data);
            return response.data;
        })
    }

    resetPassword(payload, token) {
        console.log("PAYLOAD", payload);
        return axios.put(API_URL + "/reset-password?token=" + token + "&newPassword=" + payload.password).then((response) => {
            console.log("RESPONSE", response.data);
            return response.data;
        })
    }

    logout() {
        localStorage.removeItem("user");
        localStorage.removeItem("userId");
        localStorage.removeItem("token");
    }

    getUser() {
        return JSON.parse(localStorage.getItem("user"));
    }
}

export default new userService();