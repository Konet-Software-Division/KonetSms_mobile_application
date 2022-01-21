import Snackbar from 'react-native-snackbar';
import Moment from 'moment';
// import Constant from '../constants/constant'



export const CustomsnackBar=(message, colour)  => {
    Snackbar.show({ text: message, textColor: colour,
    backgroundColor: 'black' })
}

export const formatDate=(message)  => {
    return Moment(message).format('MMMM Do YYYY')
}

export const fetchWithTimeout= async(response) =>{
    
    if (response.status >= 200 <300 ) {
        return response;
    }

    return response;
  }