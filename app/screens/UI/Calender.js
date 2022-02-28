import React, {useState} from 'react';
import { View,StyleSheet,Image,Text } from 'react-native'
import TextCapton from './TextCapton';
import ModalDatePicker from 'react-native-datepicker-modal'
import Colors from '../../constants/colors'

// import DateTimePicker from '@react-native-community/datetimepicker';

const Calender =  props => {
  // const [date, setDate] = useState(new Date(1598051730000));
  // const onChange = (event, selectedDate) => {
  //   const currentDate = selectedDate || date;
  //   setShow(Platform.OS === 'ios');
  //   setDate(currentDate);
  // };
  return (  
    <View style={styles.formControl}>

    <TextCapton style={{fontSize: 14, fontWeight:'700', textAlign: 'left'}} text={props.title}/>
    <View style={styles.input}>  

    <ModalDatePicker
    style={styles.container}
    renderDate={({ year, month, day, date }) => {
      // day=10, month=10, year=2000
      if (!date) {
        return <Text >10-10-2000</Text>
      }
      

      const dateStr = `${year}-${month}-${day}`
     props.val(dateStr)

      return <Text style={styles.selectedItem}>{dateStr}</Text>
    }}

    {...props}
  />
     <Image
          source={require('../../images/calendar.png')}
                    style={{height:20,width:20,     alignSelf:'center' }} />
  </View>

    </View>    
  );
};

const styles = StyleSheet.create({
  formControl: {
      width: '100%',
      marginBottom:10

  }, 
  container: {
    backgroundColor: 'white',
    borderBottomColor: 'veryLight',
    justifyContent: 'center',
    borderRadius: 2,
    height: 17
  },
  input: {
    paddingVertical: 5,
    paddingHorizontal:20,
    width: '100%',
    borderRadius:10,
    marginTop: 10,
    marginBottom: 20,
    justifyContent:'space-between',
    alignContent:'center',
    borderWidth: 1,
    paddingVertical:10,
    flexDirection:'row',
    backgroundColor:Colors.grey,
    borderColor:Colors.inputbodercolor,
},
selectedItem:{ 
  fontSize: 14,
  fontWeight:'500',
  color:Colors.primary 
},
})

export default Calender
