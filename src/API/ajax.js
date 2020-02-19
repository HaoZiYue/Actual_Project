import axios from 'axios';
// import qs from 'querystring';
const instance = axios.create({
  baseURL:'/api'
})
// instance.interceptors.request.use(config=>{
//   config = qs.stringify(config)
//   return config
// })
instance.interceptors.response.use(
  response => response.data,
  error =>{
    return new Promise(() => {})
  })

export default instance