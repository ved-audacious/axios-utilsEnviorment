
import Apicaller from '../utils/Restclients'


export const Getdata=Apicaller("products","GET",{},process.env.REACT_APP_DUMMY_GET_API)
  
  
