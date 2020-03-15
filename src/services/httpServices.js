import axios from "axios";

const http = axios.create({
    baseURL: 'https://api.inquickerstaging.com/v3/winter.inquickerstaging.com/',
    timeout: 5000
});

export default http;