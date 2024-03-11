import axios from "axios";
const apiConnection = async(endpoint, method,payload=null,headersObject={}) => {
  return await axios({
    method:method,
    url:`http://localhost:8000${endpoint}`,
    headers: {
      ...headersObject
    },
    data:{
      ...payload
    }
  })
  .then(res => {
    console.log(res+"in apiconnection")
    return res
})
.catch(err => {
    console.log(err+"in apicnnction")
    return err.response
})
}
export default apiConnection 