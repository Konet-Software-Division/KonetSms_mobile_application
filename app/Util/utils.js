import Snackbar from 'react-native-snackbar';


export const CustomsnackBar=(message, colour)  => {
    Snackbar.show({ text: message, textColor: colour,
    backgroundColor: 'black' })
}