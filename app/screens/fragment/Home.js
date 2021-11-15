import React, { useState, useEffect, Component } from 'react';
import MainButton from '../UI/MainButton';
import Colors from '../../constants/colors'
import { Text, TouchableOpacity, View, StyleSheet, Image, Button, FlatList } from 'react-native';
import TextCapton from '../UI/TextCapton';
import Card from '../UI/Card';
import GroupsModel from '../../model/GroupsModel';


const renderGridItem = itemData => {
    return (
        <View style={styles.groups}>
            <View style={styles.groups_first}>
                <Image
                    source={require('../../images/homefrag/group.png')}
                    style={{ height: 50, width: 50 }} />
                <View style={{ marginStart: "5%" }}>
                    <TextCapton style={{
                        fontFamily: 'Campton-bold',
                        fontSize: 14, fontWeight: '700'
                    }} text={itemData.item.customer} />
                    <TextCapton style={{ fontSize: 14, fontWeight: '500' }} text={itemData.item.contact} />
                </View>
            </View>
            <View style={styles.groups_lasticon}>
                <Image
                    source={require('../../images/homefrag/message_dark.png')}
                    style={{ height: 24, width: 24 }} />
                <Image
                    source={require('../../images/homefrag/trash.png')}
                    style={{ height: 24, width: 24 }} />
            </View>

        </View>
    );
};


const Home = ({ navigation })  => {
    
    const [Groups, setGroups] = useState([]);

    useEffect(() => {       
        setGroups([
            new GroupsModel('1', 'Proly Customers', '200 Contacts'),
            new GroupsModel('2', 'Proly Customers', '200 Contacts'),
            new GroupsModel('3', 'Proly Customers', '200 Contacts'),
            new GroupsModel('4', 'Proly Customers', '200 Contacts'),
            
        ])
       }, [])
    return(

    <View style={styles.container}>
        <View style={styles.container_two}>
            <View style={styles.container_header}>
                <View style={{height:80}}>
                    <TextCapton style={{ fontSize: 28, fontWeight: '300' }} text="Welcome" />
                    <TextCapton style={{ fontSize: 28, fontWeight: '700' }} text="Jibola orija" />
                </View>
                <Image
                    source={require('../../images/notification.png')}
                    style={styles.image} />
            </View>
            <TextCapton style={{ fontSize: 14, marginTop: 40, marginBottom: 30, fontWeight: '500' }} text="Unit Balance - 13096 units" />
            <Card style={{ padding: 23 }} >
                <TextCapton style={{ fontSize: 14, marginTop: 20, color: 'white', fontWeight: '500' }} text="Schedule Message" />
                <TextCapton style={{ fontSize: 11, marginTop: 13, marginBottom: 10, color: 'white', fontWeight: '400' }} text="Schedule your written text messages that won’t 
        arrive to the recipient until your chosen date 
        and time."/>
                <MainButton
                    style={{
                        borderRadius: 30, paddingVertical: 7, paddingHorizontal: 10,
                        width: 90,  backgroundColor: 'white'
                    }}
                    style_text={{ fontSize: 13, color: Colors.primary }}  >
                    <Text>Tap Here
                    </Text>
                </MainButton>

            </Card>
            <View style={styles.container_header}>
                <TextCapton style={{
                    fontSize: 16, fontWeight: '700'
                }} text="Groups" />
                <TextCapton style={{ fontSize: 14, fontWeight: '400'}} text="See All" />

            </View>
          


        </View>
  <View style={{flex:3}}>

            <FlatList 
                keyExtractor={(item, index) => item.id}
                data={Groups}
                renderItem={renderGridItem}
                numColumns={1}
            />
          </View>
        <View style={styles.bottomView}>
            <TouchableOpacity
                activeOpacity={0.7}
                style={styles.touchableOpacityStyle}>
                <Image
                    // FAB using TouchableOpacity with an image
                    // For online image
                    source={require('../../images/floating_action.png')}
                    // For local image
                    //source={require('./images/float-add-icon.png')}
                    style={styles.floatingButtonStyle}
                />
            </TouchableOpacity>
        </View>
    </View>
)};


export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingLeft: '7%',
        paddingRight: '7%',
        marginTop: '20%',
        flexDirection: 'column',
        paddingTop:20
    },
    container_two: {

        flexDirection: 'column'
    },
    groups: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 20,
        flexDirection: 'row',
        height: "100%",
        width: "100%",
      
    },
    groups_first: {
        alignItems: 'center',
        flexDirection: 'row',
        width: "60%"
    },
    groups_lasticon: {
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        width: "20%"

    },
    touchableOpacityStyle: {
        position: 'absolute',
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        right: 30,
        bottom: 30,
    },
    floatingButtonStyle: {
        resizeMode: 'contain',
        width: 80,
        height: 80,
        //backgroundColor:'black'
    },
    container_header: {
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        height: 40,
        marginTop: 30
    },
    bottomView: {
        width: '100%',
        height: 50,
        flex:1,
        position: 'absolute', //Here is the trick
        bottom: 0, //Here is the trick
    },
    image: {
        width: 24,
        height: 24,
        resizeMode: 'contain',
    },
    container_form: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 40
    }
});


