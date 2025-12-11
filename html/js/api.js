// API Configuration
const API_URL = 'http://localhost:5000/api';

// Create axios-like API helper
const api = {
  get: async (url, config = {}) => {
    const token = localStorage.getItem('token');
    const params = config.params ? '?' + new URLSearchParams(config.params).toString() : '';
    const response = await fetch(`${API_URL}${url}${params}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        ...(token && { 'Authorization': `Bearer ${token}` })
      }
    });
    const data = await response.json();
    if (!response.ok) {
      const error = new Error(data.error || 'Request failed');
      error.response = { data };
      throw error;
    }
    return { data };
  },
  post: async (url, data) => {
    const token = localStorage.getItem('token');
    const response = await fetch(`${API_URL}${url}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...(token && { 'Authorization': `Bearer ${token}` })
      },
      body: JSON.stringify(data)
    });
    const responseData = await response.json();
    if (!response.ok) {
      const error = new Error(responseData.error || 'Request failed');
      error.response = { data: responseData };
      throw error;
    }
    return { data: responseData };
  },
  put: async (url, data) => {
    const token = localStorage.getItem('token');
    const response = await fetch(`${API_URL}${url}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        ...(token && { 'Authorization': `Bearer ${token}` })
      },
      body: JSON.stringify(data)
    });
    const responseData = await response.json();
    if (!response.ok) {
      const error = new Error(responseData.error || 'Request failed');
      error.response = { data: responseData };
      throw error;
    }
    return { data: responseData };
  },
  delete: async (url) => {
    const token = localStorage.getItem('token');
    const response = await fetch(`${API_URL}${url}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        ...(token && { 'Authorization': `Bearer ${token}` })
      }
    });
    const data = await response.json();
    if (!response.ok) {
      const error = new Error(data.error || 'Request failed');
      error.response = { data };
      throw error;
    }
    return { data };
  }
};

