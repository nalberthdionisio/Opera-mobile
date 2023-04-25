import axios from "axios";

const api = axios.create({
    baseURL: 'http://192.168.137.169/api/v2/userprocedure/'
})

export default api;