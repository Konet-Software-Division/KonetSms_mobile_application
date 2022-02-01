import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Image,ActivityIndicator, TouchableOpacity, FlatList } from 'react-native';
import TextCapton from '../UI/TextCapton';
import SearchInput from '../UI/SearchInput';
import ContactModel from '../../model/ContactModel';
import GroupsModel from '../../model/GroupsModel';
import Colors from '../../constants/colors'
import ButtonImageText from '../UI/ButtonImageText';
import FlatListUI from '../UI/FlatListUI';

import * as groupNetworks from '../../network/GroupNetworks';
import * as contactsNetworks from '../../network/ContactsNetworks';

import { useSelector, useDispatch } from 'react-redux';


const renderGroupGridItem = itemData => {
    return (
        <View style={styles.groups}>
            <View style={styles.groups_first}>
                <Image
                    source={require('../../images/homefrag/group.png')}
                    style={{ height: 50, width: 50 }} />
                <View style={{ marginStart: "5%" }}>
                    <TextCapton style={{
                        // fontFamily: 'Campton-bold',
                        fontSize: 14, fontWeight: '700'
                    }} text={itemData.item.name} />
                    <TextCapton style={{ fontSize: 14, fontWeight: '500' }} text={itemData.item.contact_count+" Contacts"} />
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


const renderContactGridItem = itemData => {
    return (
        <View style={styles.groups}>
            <View style={styles.groups_first}>
                <Image
                    source={require('../../images/contacts/profile_image2.png')}
                    style={{ height: 40, width: 40 }} />
                <View style={{ marginStart: "15%" }}>
                    <TextCapton style={{
                        // fontFamily: 'Campton-bold',
                        fontSize: 14, fontWeight: '700',
                    }} text={itemData.item.firstName +" "+itemData.item.lastName} />
                    <TextCapton style={{ fontSize: 14, fontWeight: '500' }} text={itemData.item.phone} />
                </View>
            </View>
            <View style={styles.groups_lasticon}>
                <Image
                    source={require('../../images/contacts/group.png')}
                    style={{ height: 24, width: 24 }} />
                <TextCapton style={{ fontSize: 14, fontWeight: '500' }} 
                text={itemData.item.groups[0].name} />

            </View>

        </View>
    );
};


const Contacts = ({ navigation }) => {
    const [ContactState, setContactState] = useState(true);


    const dispatch = useDispatch();
    const contactslice= useSelector(state => state.getContactsSlice);

    const { isFetching, isSuccess, isError, errorMessage,groups} = useSelector(state => state.getGroupSlice);
    useEffect(() => {
        dispatch(groupNetworks.getGroups());
        dispatch(contactsNetworks.getContacts());
        if (isError) {
          CustomsnackBar(errorMessage,'red');
        }
        if (contactslice.isError) {
            CustomsnackBar(errorMessage,'red');
          }
       
      }, [isError,contactslice.isError]);

    return (

        <View style={styles.container}>
            <View style={styles.container_header}>
                <TextCapton style={{ fontSize: 24, fontWeight: '700' }} text="Contacts" />
                <ButtonImageText
                    style={{
                        marginVertical: 20
                    }}
                    title='Add contacts'
                    onPress={() => {
                        navData.navigation.navigate('Login');
                    }}
                />
            </View>

            <SearchInput />
           { !ContactState ? 
            <View style={{flex:3}}>
            {isFetching ? (
                    <ActivityIndicator size="large" style={{justifyContent: 'center',marginTop:70}} />
                  ) : (
                      <FlatListUI list_data={groups} empty_message="No Group found" renderGridItem={renderGroupGridItem}/>
                      )}
                    </View>
           
                   
            :
            <View style={{flex:1,width:'100%'}}>
            {contactslice.isFetching ? (
                    <ActivityIndicator size="large" style={{justifyContent: 'center',marginTop:70}} />
                  ) : (
                      <FlatListUI list_data={contactslice.contacts} empty_message="No Contact found" renderGridItem={renderContactGridItem}/>
                      )}
                    </View>
            
            }
            <View style={{width:'100%', justifyContent: 'center',
        alignItems: 'center'}}>
            <View style={styles.container_bottom}>
                <TouchableOpacity
               onPress={() => {
                setContactState(true)
            }}
                >
                    <Text style={styles.textStyle}>Contacts</Text>
                </TouchableOpacity>
                <Image
                    source={require('../../images/contacts/Line.png')}
                    style={{ height: 24, width: 2, marginHorizontal:12 }} />
                <TouchableOpacity
                 onPress={() => {
                    setContactState(false)
                }}
                >
                    <Text style={styles.textStyle}>Groups</Text>

                </TouchableOpacity>
            </View>
            </View>

        </View>
    )
};


export default Contacts

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingLeft: '7%',
        paddingRight: '7%',
        paddingTop: '20%',
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
    groups_lasticon: {
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        width: "30%",

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
    image: {
        width: 24,
        height: 24,
        resizeMode: 'contain',
    },
    textStyle: {
        // fontFamily: 'Campton',
        fontSize: 14,
        fontWeight: '700',
        color: 'white',
    }

});


