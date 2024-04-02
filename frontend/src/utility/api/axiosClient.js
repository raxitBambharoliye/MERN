import axios from "axios";




const axiosClient= axios.create({
    baseURL:import.meta.env.VITE_BASE_URL,
})

axiosClient.interceptors.request.use(
    (config)=>{
        const token=localStorage.getItem('token')
        if(token){
            config.headers.Authorization=token
        }
        return config;
    }
)

export default axiosClient;