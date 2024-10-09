import axios from "axios";
import queryString from "query-string";

const API_URL = "https://be.rivalz.ai/";

const axiosClient = axios.create({
  baseURL: API_URL,
  headers: {
    "content-type": "application/json",
  },
  paramsSerializer: (params) => queryString.stringify(params),
});

axiosClient.interceptors.request.use(async (config) => {
  const token = localStorage.getItem("jwtToken");
  if (token && config.headers !== undefined) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

axiosClient.interceptors.response.use(
  (response) => {
    if (response && response.data) {
      return response.data.data;
    }
    return response.data;
  },
  (error) => {
    throw error.response.data;
  }
);
export default axiosClient;
