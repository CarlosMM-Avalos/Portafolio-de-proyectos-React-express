import axios from "axios";

const API = axios.create({
  baseURL: "https://portafolio-back-9rkj.onrender.com/"
  // baseURL: "http://localhost:5000/api"
});

export default API;