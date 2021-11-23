import { Dimensions } from 'react-native';

export default {
    baseUrl: 'https://glosofta2z.net/api/v2/',
    windowWidth:Dimensions.get('window').width,
    windowHeight:Dimensions.get('window').height,
    USERDATA:'user_data',
    FIRST_NAME:'first_name',
    LAST_NAME:'last_name',
    AVATAR:'avatar',
    Randid:'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    })
}
