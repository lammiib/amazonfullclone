import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://amazon-backendapi.onrender.com",
});

export { axiosInstance };
