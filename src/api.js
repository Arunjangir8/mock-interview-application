import axios from "axios";

const API_BASE_URL = "https://mock-interview-application-backend.onrender.com";

export const signup = async (userData) => {
  return await axios.post(`${API_BASE_URL}/signup`, userData, { withCredentials: true });
};

export const login = async (userData) => {
  return await axios.post(`${API_BASE_URL}/login`, userData, { withCredentials: true });
};
