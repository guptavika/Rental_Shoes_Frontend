import axios from "axios";

export const api = axios.create({
  // baseURL: "http://localhost:5000/api",  //LOCAL
  baseURL: "https://rental-shoes-backend.onrender.com/api" // PRODUCTION

});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});