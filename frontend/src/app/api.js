import axios from 'axios';

const api = axios.create({
   
    baseURL: "http://localhost:8000/api/v1",
    // withCredentials: true,
    credentials:true

});

export const googleAuth = (code) => api.get(`/auth/google?code=${code}`);