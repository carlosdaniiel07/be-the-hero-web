import axios from 'axios';

const api = axios.create({
  baseURL: 'https://be-the-hero-node-api.herokuapp.com',
});

export default api;
