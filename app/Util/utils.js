import Snackbar from 'react-native-snackbar';
import Moment from 'moment';
import {useNetInfo} from "@react-native-community/netinfo";



export const CustomsnackBar=(message, colour)  => {
    Snackbar.show({ text: message, textColor: colour,
    backgroundColor: 'black' })
}

export const formatDate=(message)  => {
    return Moment(message).format('MMMM Do YYYY')
}

