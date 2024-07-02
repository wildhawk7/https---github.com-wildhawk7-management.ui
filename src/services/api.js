import axios from 'axios';

// Set the base URL for the API
const API_BASE_URL = 'https://localhost:7236/api/login';

// Create an Axios instance
const api = axios.create({
  baseURL: API_BASE_URL,
});

export const login = async (username, password) => {
  try {
    const response = await api.post('/login', { username, password });
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : new Error('Network error');
  }
};

// Add other API calls here, e.g., registerEmployee, getEmployees, etc.
