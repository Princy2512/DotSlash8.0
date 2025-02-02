// utils/axios.ts
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:5000/api',  // Adjust this URL as needed
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;
