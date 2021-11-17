import React, { useState, useEffect } from 'react';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { View, StyleSheet,Image,TouchableOpacity,Text } from 'react-native';
import Colors from '../../constants/colors'
import TextCapton from '../UI/TextCapton';
import { useNavigation } from '@react-navigation/native';


const ReportDetails =({ route }) => {
  const navigation = useNavigation();
  const { props} = route.params;

  return (
    <View style={styles.container}>
    <View style={styles.container_header}>
    <TouchableOpacity  onPressIn={() => navigation.goBack()}> 
    <Image source={require('../../images/report/back.png')}
                    style={{ height: 15, width: 7}} />
                    </TouchableOpacity>
    <TextCapton style={{ fontSize: 24, fontWeight: '700',marginLeft:20 }} text="Transaction ID " />
     <TextCapton style={{ fontSize: 24, fontWeight: '700',marginLeft:10 }} text={props.item.idsms} />
        
    </View>
    <View style={styles.groups}>

<View style={styles.groups_first}>
    <View >
    <View style={{flexDirection: 'row'}} >
        <TextCapton style={{ fontSize: 14, fontWeight: '700' }} text="Cost: " />
        <TextCapton style={{ fontSize: 14, fontWeight: '500' }} text={props.item.cost} />
        </View>
        <View style={{flexDirection: 'row', marginTop:27}} >
        <TextCapton style={{ fontSize: 14, fontWeight: '700' }} text="Volume: " />
        <TextCapton style={{ fontSize: 14, fontWeight: '500' }} text="1" />
        </View>
    </View>
</View>
<View style={styles.groups_first}>
    
    <View style={{ marginStart: "1%" }}>
    <View style={{flexDirection: 'row'}} >
        <TextCapton style={{ fontSize: 14, fontWeight: '700' }} text="No of Pages: " />
        <TextCapton style={{ fontSize: 14, fontWeight: '500' }} text={props.item.date} />
        </View>
        <View style={{flexDirection: 'row',marginTop:27}} >
        <TextCapton style={{ fontSize: 14, fontWeight: '700' }} text="Date Created: " />
        <TextCapton style={{ fontSize: 14, fontWeight: '500' }} text={props.item.pageNo} />
        </View>
     
    </View>
</View>

</View>
<TextCapton style={{ fontSize: 14, fontWeight: '700',marginTop:40 }} text="Message: " />
<TextCapton style={{ fontSize: 14, fontWeight: '400',marginTop:40 }} text='Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance.' />

<TouchableOpacity > 
<View style={{ flexDirection: 'row', marginTop:50,justifyContent: 'center'}}> 
<Image source={require('../../images/report/trash.png')}
                    style={{ height: 18, width: 18}} />
<TextCapton style={{ fontSize: 14, fontWeight: '700' }} text="  Delete Message" />
</View>
</TouchableOpacity>
   </View>
  );
}

export default ReportDetails

const styles = StyleSheet.create({
  container: {
      flex: 1,
      marginTop: '20%',
      flexDirection: 'column',
      backgroundColor:'white',
      paddingLeft: "5%",
      paddingEnd:"5%"
  },
  groups: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    height: 70,
    width: "100%",
    marginTop: 10,
    paddingRight: 30,
},
groups_first: {
    alignItems: 'center',
    flexDirection: 'row',
    width: "50%",
    
},
  container_header: {
      alignItems: 'baseline',
      flexDirection: 'row',
      height: "10%",
      alignItems: 'center'
  },
  container_bottom: {
      backgroundColor: Colors.primary,
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
      borderRadius: 30,
      padding:10,
      marginBottom:40
  },


});