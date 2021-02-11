import axios from 'axios';
import router from '@/router';

export const BASE_API = process.env.VUE_APP_BASE_API_URL;

//create an axios instance
const service = axios.create({
    baseURL: BASE_API, //api base_url
    timeout: 1000, //request timeout
    withCredentials: true
});

service.interceptors.response.use(
    response => response,
    async(error) => {
        if (error.response) {
            switch (error.response.status) {
                case 404: router.push(`/404`);
                    break;
            }
        }
        return Promise.reject(error);
    }
);

export default service;
