import axios from 'axios';

const API_URL = 'http://localhost:5000/databases';

export const getConnections = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching connections:', error);
    throw error;
  }
};

export const getConnectionById = async (id: string) => {
  try {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching connection by id:', error);
    throw error;
  }
};

export const addConnection = async (data: { name: string; url: string; username: string; password: string; type: string }) => {
  try {
    const response = await axios.post(API_URL, data);
    return response.data;
  } catch (error) {
    console.error('Error adding connection:', error);
    throw error;
  }
};

export const removeConnection = async (id: string) => {
  try {
    const response = await axios.delete(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error removing connection:', error);
    throw error;
  }
};

export {};