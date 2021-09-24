import axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:9000'
    // baseURL: "https://my-mern-messenger-live.herokuapp.com/"
})

export default instance;