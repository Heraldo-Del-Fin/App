import axios from "axios";

const API_URL = "http://localhost:3001/api"; // Cambiar por la URL del backend

export const apiClient = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const fetchData = async (endpoint, params = {}) => {
  try {
    const response = await apiClient.get(endpoint, { params });
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error.response?.data || error.message);
    throw error;
  }
};

export const postData = async (endpoint, data) => {
  try {
    const response = await apiClient.post(endpoint, data);
    return response.data;
  } catch (error) {
    console.error("Error posting data:", error.response?.data || error.message);
    throw error;
  }
};

export const getFilteredData = async (table, filters) => {
    return fetchData(`/${table}`, filters);
  };
  
  export const insertData = async (table, data) => {
    return postData(`/${table}`, data);
  };
  