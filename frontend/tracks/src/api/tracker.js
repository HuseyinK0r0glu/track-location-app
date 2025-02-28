import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const instance = axios.create({
    /// baseURL changes every 8 hours or whenever restarts 
    baseURL : 'https://4a2e-193-140-239-246.ngrok-free.app'
});

instance.interceptors.request.use(
    // config is the configuration for the request
    async (config) => {
        const token = await AsyncStorage.getItem('token');
        if(token){
            config.headers.Authorization = `Bearer ${token}`
        }
        return config; // This is implicitly wrapped in a Promise.resolve(config)
    },
    (err) => {
        return Promise.reject(err);
    }
);

export default instance;