import axios from "axios";

const BASE_URL = "http://localhost:8080";

export const loginUser = (data) => {
    return axios.post(`${BASE_URL}/Login`, data);
};

export const registerUser = (data) => {
    return axios.post(`${BASE_URL}/register`, data);
};