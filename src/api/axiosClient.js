import axios from "axios";

const axiosClient = axios.create({
  baseURL: process.env.API_URL,
  headers: {
    "content-type": "application/json",
  },
});
axiosClient.interceptors.request.use(async (request) => {
  const token = localStorage.getItem("token");
  token && (request.headers.Authorization = token);
  return request;
});

axiosClient.interceptors.response.use(
  (response) => {
    if (response && response.data) {
      return response.data;
    }
    return response;
  },
  (error) => {
    throw error;
  }
);
export default axiosClient;
