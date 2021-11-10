import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, FlatList } from 'react-native';
import TextCapton from '../UI/TextCapton';
import ButtonImageText from '../UI/ButtonImageText';
import SearchInput from '../UI/SearchInput';
import ContactModel from '../../model/ContactModel';
import GroupsModel from '../../model/GroupsModel';
import Colors from '../../constants/colors'

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
                    }} text={itemData.item.name} />
                    <TextCapton style={{ fontSize: 14, fontWeight: '500' }} text={itemData.item.phone} />
                </View>
            </View>
            <View style={styles.groups_lasticon}>
                <Image
                    source={require('../../images/contacts/group.png')}
                    style={{ height: 24, width: 24 }} />
                <TextCapton style={{ fontSize: 14, fontWeight: '500' }} text={itemData.item.group} />

            </View>

        </View>
    );
};


const Contacts = () => {
    const [Contact, setContact] = useState([]);
    const [Groups, setGroups] = useState([]);
    const [ContactState, setContactState] = useState(true);
 

    useEffect(() => {
        setGroups([
            new GroupsModel('1', 'Proly Customers', '200 Contacts'),
            new GroupsModel('2', 'Proly Customers', '200 Contacts'),
            new GroupsModel('3', 'Proly Customers', '200 Contacts'),
            new GroupsModel('4', 'Proly Customers', '200 Contacts'),

        ])
        setContact([
            new ContactModel('1', '../../images/contacts/profile_image.png', 'Obi', '08099267871', "Groud A"),
            new ContactModel('2', '../../images/contacts/profile_image2.png', 'Jude', '08001263316', "Groud B"),
            new ContactModel('3', '../../images/contacts/profile_image.png', 'David', '08099269815', "Groud C"),
            new ContactModel('4', '../../images/contacts/profile_image2.png', 'Frank', '08099167875', "Groud D"),

        ])
    }, [])
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
           { ContactState ? 
            <FlatList
                keyExtractor={(item, index) => item.id}
                data={Contact}
                renderItem={renderContactGridItem}
                numColumns={1}
            />
           
            :
               <FlatList
                keyExtractor={(item, index) => item.id}
                data={Groups}
                renderItem={renderGroupGridItem}
                numColumns={1}
            />}
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
        marginTop: '20%',
        flexDirection: 'column'
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


