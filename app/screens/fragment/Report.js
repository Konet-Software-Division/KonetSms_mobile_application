import React, { useState, useEffect } from 'react';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { Text, View, StyleSheet,useWindowDimensions,FlatList,Image } from 'react-native';
import Colors from '../../constants/colors'
import TextCapton from '../UI/TextCapton';
import SmsModel from '../../model/SmsModel';


const renderContactGridItem = itemData => {
    return (
        <View style={styles.groups}>
            <View style={styles.groups_first}>
                <Image
                    source={require('../../images/contacts/profile_image2.png')}
                    style={{ height: 40, width: 40 }} />
                <View style={{ marginStart: "15%" }}>
                 
                    <TextCapton style={{ fontSize: 14, fontWeight: '500' }} text={itemData.item.idsms} />
                    <TextCapton style={{
                        fontSize: 14, fontWeight: '500',
                    }} text={itemData.item.cost} />
                </View>
            </View>
            <View style={styles.groups_first}>
                
                <View style={{ marginStart: "1%" }}>
                 
                    <TextCapton style={{ fontSize: 14, fontWeight: '500' }} text={itemData.item.date} />
                    <TextCapton style={{
                        fontSize: 14, fontWeight: '500',
                    }} text={itemData.item.pageNo} />
                </View>
            </View>

        </View>
    );
};

const renderTabBar = props => (
  <TabBar
      {...props}
      activeColor={Colors.primary}
      inactiveColor={Colors.primary}
      style={{marginTop:25,backgroundColor:'white'}}
      indicatorStyle={{backgroundColor:Colors.lightblue, height:4}}
  />
);

const Report = () => {
  const [Sms, setSms] = useState([]);
  useEffect(() => {
    setSms([
        new SmsModel('1','254599', 'Thu Jun 03 2021', '2 Units', '08099267871'),
        new SmsModel('2','498099','Thu Jun 03 2021', ' 6 Units', '08001263316'),
        new SmsModel('3','428599' ,'Thu Jun 03 2021', ' 3 Units', '08099269815'),
        new SmsModel('4','901599', 'Thu Jun 03 2021', ' 5 Units', '08099167875'),

    ])
}, [])
  const SMS = () => (
    <FlatList
    keyExtractor={(item, index) => item.id}
    data={Sms}
    renderItem={renderContactGridItem}
    numColumns={1}
  />
  );
  
  const Transactions = () => (
    <View style={{ flex: 1}} />
    
  );
  
  const renderScene = SceneMap({
    SMS: SMS,
    Transactions: Transactions,
  });
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'SMS', title: 'SMS' },
    { key: 'Transactions', title: 'Transactions' },
  ]);

  return (
    <View style={styles.container}>
    <View style={styles.container_header}>
        <TextCapton style={{ fontSize: 24, fontWeight: '700' }} text="Reports" />
        
    </View>
    <TabView
      	navigationState={{ index, routes }}
      	renderScene={renderScene}
      	renderTabBar={renderTabBar}
      	onIndexChange={setIndex}
      	initialLayout={{ width: layout.width }}
  	/>
   </View>
  );
}

export default Report

const styles = StyleSheet.create({
  container: {
      flex: 1,
      paddingLeft: '7%',
      paddingRight: '7%',
      marginTop: '20%',
      flexDirection: 'column',
      backgroundColor:'white'
    
  },
  groups: {
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: '5%',
    flexDirection: 'row',
    height: 20,
    width: "100%",
    marginTop: 45
},
groups_first: {
    alignItems: 'center',
    flexDirection: 'row',
    width: "50%",
},
  container_header: {
      alignItems: 'baseline',
      justifyContent: 'space-between',
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