import axios from "axios";

const instance = axios.create({
  baseURL: "http://192.168.1.101:8000",
});

export default instance;
