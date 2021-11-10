import React from 'react'
import { View, Text, Image, TextInput, StyleSheet } from 'react-native'
import colors from '../../constants/colors'

const SearchInput = props => {

    return (
        <View style={styles.searchSection}>
            <Image style={styles.image} 
                    source={require('../../images/contacts/search_normal.png')}
                    />

            <TextInput
                style={styles.input}
                placeholder="Search"
                placeholderTextColor="#0A043C"
                // onChangeText={(searchString) => { this.setState({ searchString }) }}
                underlineColorAndroid="transparent"
            />
        </View>
    )

}

const styles = StyleSheet.create({
    searchSection: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height:44,
        borderRadius:30,
        marginTop:30,
        backgroundColor:colors.darkgrey,
    },
    searchIcon: {
        padding: 10,
    },
    image: {
        width: 20,
        height: 20,
        marginLeft:20,
    },
    input: {
        flex: 1,
        paddingTop: 12,
        paddingRight: 10,
        paddingBottom: 12,
        paddingLeft: 20,
        color: '#424242',
    }
})
export default SearchInput