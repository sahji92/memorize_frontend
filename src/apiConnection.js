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
    console.log(res)
    return res
})
.catch(err => {
    console.log(err)
    return err.response
})
}
export default apiConnection 