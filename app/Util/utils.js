import Snackbar from 'react-native-snackbar';
import Moment from 'moment';
import Constant from '../constants/constant'



export const CustomsnackBar=(message, colour)  => {
    Snackbar.show({ text: message, textColor: colour,
    backgroundColor: 'black' })
}

export const formatDate=(message)  => {
    return Moment(message).format('MMMM Do YYYY')
}

export const fetchWithTimeout= async(resource, options = {}) =>{
    
    const controller = new AbortController();
    const id = setTimeout(() => controller.abort(), Constant.timeout);
    const response = await fetch(resource, {
      ...options,
      signal: controller.signal  
    });
    
    clearTimeout(id);
    return response;
  }