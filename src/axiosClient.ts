import axios from "axios";

const axiosClient = axios.create({
   baseURL:'https://itla-crush-backend.herokuapp.com/api/'
})


export default axiosClient