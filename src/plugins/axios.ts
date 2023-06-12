import axios from 'axios';

const apiBase = axios.create({
  baseURL: process.env.VUE_APP_API_BASE
})

export default apiBase;
