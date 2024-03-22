import axios from "axios";
import { json } from "react-router-dom";
const apiConnection = async(endpoint, method,payload=null,headers={}) => {
  return await axios({
    method:method,
    url:`http://localhost:8000${endpoint}`,
    headers: {
      Authorization: `Bearer ${JSON.parse(localStorage.getItem('profile'))?.data?.token}`,
      ...headers
    },
    data:{
      ...payload
    }
  })
  .then(res => {
    console.log(res)
    console.log("in apiconnection")
    return res
})
.catch(err => {
    console.log(err)
    console.log("in apicnnction")
    return err.response
})
}
export default apiConnection 