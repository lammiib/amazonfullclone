import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://amazonbackendclone.onrender.com",
});

export { axiosInstance };
