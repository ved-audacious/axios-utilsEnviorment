
import axios from 'axios'

const Apicaller = (url,method,data,host=process.env.REACT_APP_DUMMY_GET_API) => {
  return axios(
    {
        url:`${host}${url}`,method,data
    }
  )
}

export default Apicaller
