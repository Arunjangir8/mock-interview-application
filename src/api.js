import axios from "axios";

const API_BASE_URL = "https://mock-interview-application-backend.onrender.com";

export const signup = async (userData) => {
  return await axios.post(`${API_BASE_URL}/signup`, userData, { withCredentials: true });
};

export const login = async (userData) => {
  return await axios.post(`${API_BASE_URL}/login`, userData, { withCredentials: true });
};

export const getUserProfile = (userId) => {
  return axios.get(`${API_BASE_URL}/profile/${userId}`);
};

export const updateUserProfile = (userId, data) => {
  return axios.put(`${API_BASE_URL}/profile/${userId}`, data);
};

export const getAppointmentsByUserId = async (userId) => {
  return await axios.get(`${API_BASE_URL}/appointments/${userId}`);
};


export const deleteAppointment = async (appointmentId) => {
  return await axios.delete(`${API_BASE_URL}/appointments/${appointmentId}`);
};

export const bookAppointmentAPI = async ({ userId, interviewerId, dateTime }) => {
  // eslint-disable-next-line no-useless-catch
  try {
    const response = await axios.post(`${API_BASE_URL}/appointments`, {
      userId,
      interviewerId,
      dateTime,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};