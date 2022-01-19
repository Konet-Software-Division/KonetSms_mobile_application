import React, { useState, useEffect } from 'react';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { View, StyleSheet,useWindowDimensions,ActivityIndicator,Image } from 'react-native';
import Colors from '../../constants/colors'
import TextCapton from '../UI/TextCapton';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import * as transactionsNetworks from '../../network/TransactionsNetworks';
import { useSelector, useDispatch } from 'react-redux';
import FlatListUI from '../UI/FlatListUI';
import {formatDate} from '../../Util/utils';


const Report = () => {
 const navigation = useNavigation(); 

  const dispatch = useDispatch();
  const { isFetching, isSuccess, isError, errorMessage,sms_transactions,transactions} = useSelector(state => state.transactionsSlice);
  const  {access_token}  = useSelector(state => state.loginSlice);

  useEffect(() => {
      dispatch(transactionsNetworks.smsTransactions( { access_token: access_token } ));
      dispatch(transactionsNetworks.paymentTransactions( { access_token: access_token } ));

      if (isError) {
        CustomsnackBar(errorMessage,'red');
      }
     
    }, [isError]);
    
const renderTransactionGridItem = itemData => {
  
  return (
    <TouchableOpacity  onPressIn={() => navigation.navigate('ReportDetails',{
    props: itemData})
  }>
        <View style={[styles.groups, { backgroundColor: itemData.item.id%2==0?Colors.grey:'white' }]}>

          <View style={styles.groups_first}>
              <Image
                  source={require('../../images/report/transations.png')}
                  style={{ height: 40, width: 40 }} />
              <View style={{ marginStart: "15%" }}>
              <View style={{flexDirection: 'row'}} >
                  <TextCapton style={{ fontSize: 14, fontWeight: '700' }} text="ID: " />
                  <TextCapton style={{ fontSize: 14, fontWeight: '500' }} text={itemData.item.transactionId} />
                  </View>
                  <View style={{flexDirection: 'row'}} >
                  <TextCapton style={{ fontSize: 14, fontWeight: '700' }} text="Units: " />
                  <TextCapton style={{ fontSize: 14, fontWeight: '500' }} text={itemData.item.unit} />
                  </View>
              </View>
          </View>
          <View style={styles.groups_first}>
              
              <View style={{ marginStart: "1%" }}>
              <View style={{flexDirection: 'row'}} >
              <TextCapton style={{ fontSize: 14, fontWeight: '700' }} text="Date: " />

                    <TextCapton style={{ fontSize: 14, fontWeight: '500' }} text={formatDate(itemData.item.created_at)} />
                    </View>
                    <View style={{flexDirection: 'row'}} >
                    <TextCapton style={{ fontSize: 14, fontWeight: '700' }} text="Amount: " />
                  <TextCapton style={{ fontSize: 14, fontWeight: '500' }} text={itemData.item.amount} />
                  </View>
               
              </View>
          </View>

      </View>
      </TouchableOpacity>
  )
};
const renderSmsGridItem = itemData => {
    return (
          <View style={[styles.groups, { backgroundColor: itemData.item.id%2==0?Colors.grey:'white' }]}>

            <View style={styles.groups_first}>
                <Image
                    source={require('../../images/report/sms.png')}
                    style={{ height: 40, width: 40 }} />
                <View style={{ marginStart: "15%" }}>
                <View style={{flexDirection: 'row'}} >
                    <TextCapton style={{ fontSize: 14, fontWeight: '700' }} text="ID: " />
                    <TextCapton style={{ fontSize: 14, fontWeight: '500' }} text={itemData.item.transaction_id} />
                    </View>
                    <View style={{flexDirection: 'row',marginTop:5}} >
                    <TextCapton style={{ fontSize: 14, fontWeight: '700' }} text="Units: " />
                    <TextCapton style={{ fontSize: 14, fontWeight: '500' }} text={itemData.item.cost} />
                    </View>
                </View>
            </View>
            <View style={styles.groups_first}>
                
                <View style={{ marginStart: "1%" }}>
                <View style={{flexDirection: 'row'}} >
                    <TextCapton style={{ fontSize: 14, fontWeight: '700' }} text="Date: " />
                    <TextCapton style={{ fontSize: 14, fontWeight: '500' }} 
              text={formatDate(itemData.item.created_at)} /> 
                    </View>
                    <View style={{flexDirection: 'row',marginTop:5}} >
                    <TextCapton style={{ fontSize: 14, fontWeight: '700' }} text="No. of Pages: " />
                    <TextCapton style={{ fontSize: 14, fontWeight: '700' }} text={itemData.item.number_of_pages} />
                   
                    <TextCapton style={{ marginLeft:8,fontSize: 14, fontWeight: '700' }} text="Vol. " />
                    <TextCapton style={{ fontSize: 14, fontWeight: '700' }} text={itemData.item.volume} />
                    </View>
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
      style={{marginTop:25,backgroundColor:'white',marginRight:30,marginLeft:30}}
      indicatorStyle={{backgroundColor:Colors.lightblue, height:4
      }}
  />
);


  // const [Sms, setSms] = useState([]);
  const [Transaction, setTransaction] = useState([]);


  const SMS = () => (

  <View style={{flex:1}}>
  {isFetching ? (
          <ActivityIndicator size="large" style={{justifyContent: 'center',marginTop:70}} />
        ) : (
            <FlatListUI list_data={sms_transactions} empty_message="No SMS found" renderGridItem={renderSmsGridItem}/>
            )}
          </View>
  );
  
  const Transactions = () => (
  
  <View style={{flex:1}}>
  {isFetching ? (
          <ActivityIndicator size="large" style={{justifyContent: 'center',marginTop:70}} />
        ) : (
            <FlatListUI list_data={transactions} empty_message="No SMS found" renderGridItem={renderTransactionGridItem}/>
            )}
          </View>
    
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
        <TextCapton style={{ fontSize: 24, fontWeight: '700',marginLeft:30 }} text="Reports" />
        
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
      marginTop: '20%',
      flexDirection: 'column',
      backgroundColor:'white'
    
  },
  groups: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    height: 70,
    width: "100%",
    marginTop: 10,
    paddingLeft: 20,
    paddingRight: 20,
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