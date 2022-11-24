import axios from 'axios';
import { store } from './store/store';

const axiosInstance = axios.create({
    baseURL: `https://6353739ca9f3f34c3752aeb7.mockapi.io/ayf/article`,
});

axiosInstance.interceptors.request.use((config) => {
    const state = store.getState();
    const token = state.auth.auth.idToken;
    config.params = config.params || {};
    config.params['auth'] = token;

    return config;
});

export default axiosInstance;