import React from 'react'
import { View, FlatList, StyleSheet,Text } from 'react-native'



const FlatListUI = props => {
    const keyExtractor = (item, index) => {
        return Math.random().toString();
    }
    const EmptyListMessage = ({item}) => {
        return (
          // Flat List Item
          <Text
            style={styles.emptyListStyle}>
            {props.empty_message}
          </Text>
        );
      };
    return (
        <View style={styles.container}>
            
             <FlatList 
                keyExtractor={(item, index) => item.id}
                data={props.list_data}
                renderItem={props.renderGridItem}
                numColumns={1}
                 keyExtractor={keyExtractor}
                ListEmptyComponent={EmptyListMessage}
            />
            {/* <FlatList
                data={props.userData}
               
                renderItem={props.renderMainItem}
                // ListEmptyComponent={EmptyListMessage}

            /> */}
        </View>
    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    emptyListStyle: {
        padding: 10,
        fontSize: 18,
        textAlign: 'center',
      },
});

export default FlatListUI

