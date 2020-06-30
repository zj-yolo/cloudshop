// 通用请求配置
import axios from 'axios'
let instance = axios.create({
    baseURL: process.env.REACT_APP_URL
})
instance.interceptors.request.use(function(config){
    return config
},function(error){
    return Promise.reject(error)
})
instance.interceptors.response.use(function(response){
    return response.data
},function(error){
    return Promise.reject(error)
})
export default instance