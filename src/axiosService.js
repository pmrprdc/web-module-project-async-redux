import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://www.boredapi.com/api/activity/', // Replace with your API base URL
  timeout: 5000, // Define a timeout in milliseconds
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;