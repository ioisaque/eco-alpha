import axios from 'axios';

const api = axios.create({
  baseURL: 'http://hi.isaquecosta.com.br/webservices/',
});

export default api;
