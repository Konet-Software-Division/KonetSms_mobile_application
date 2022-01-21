import axios from 'axios';
import Constant from '../app/constants/constant'
import { useSelector, useDispatch } from 'react-redux';
import EncryptedStorage from 'react-native-encrypted-storage';

const Axiosclient = axios.create({
  baseURL: Constant.baseUrl,
  timeout: 100000, 
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  },
});
const requestHandler = async(request) => {

  const token = await EncryptedStorage.getItem("user_token");

  request.headers.Authorization = token;  

  return request;
};

const errorHandler = error => {

    if (error.response) {
        return Promise.reject(error.response.data);
      } else if (error.request) {
        return Promise.reject(new Error(strings.common.connectionError));
      } 
    return Promise.reject(error);
      
};

Axiosclient.interceptors.request.use(
    (request) => requestHandler(request),
    (error) => errorHandler(error)
);

Axiosclient.interceptors.response.use(
    (response) => response,
    (error) => errorHandler(error)
 );



export default Axiosclient;
