import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getLocalStorageItem, setLocalStorageItem } from '@utils';

const baseURL = process.env.VITE_BASE_API_URL;

const api = axios.create({
  baseURL,
  headers: {
    'Cache-Control': 'no-cache',
  },
  timeout: 30000, // 30 seconds
});

// Request interceptor
api.interceptors.request.use(
  (config) => {
    const token = getLocalStorageItem('token');

    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    } else {
      delete config.headers['Authorization'];
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      const customError = {
        errors: error.response.data.errors || [{ errorMessage: error.response.data.message }],
        errorMessage: error.response.data.message,
      };

      // Show toast notification
      toast.error(customError.errorMessage);

      // Save error information in localStorage
      setLocalStorageItem('api_error', JSON.stringify(customError));

      // Modify the response to include custom error details
      return Promise.reject(customError);
    }

    return Promise.reject(error);
  }
);

export default api;
