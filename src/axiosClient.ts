import axios from "axios";

const axiosClient = axios.create({
   baseURL:'localhost:5000/api/'
})


export default axiosClient