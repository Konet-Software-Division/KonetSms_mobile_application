import React from 'react'
import { View, FlatList, StyleSheet } from 'react-native'



const FlatListUI = props => {
    const keyExtractor = (item, index) => {
        return Math.random().toString();
    }
    return (
        <View style={styles.container}>
            <FlatList
                data={props.userData}
                keyExtractor={keyExtractor}
                renderItem={props.renderMainItem}
            />
        </View>
    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});

export default FlatListUI

