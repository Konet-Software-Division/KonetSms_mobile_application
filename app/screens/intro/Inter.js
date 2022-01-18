// import React, { Component } from 'react';
// import {
//   StyleSheet,
//   View,
//   Text,
// } from 'react-native';
// import NetInfo from "@react-native-community/netinfo";

// class Inter extends Component {

//   NetInfoSubscribtion = null;

//   constructor(props) {
//     super(props);
//     this.state = {
//       connection_status: false,
//       connection_type: null,
//       connection_net_reachable: false,
//       connection_wifi_enabled: false,
//       connection_details: null,
//     }
//   }

//   componentDidMount() {
    
//     this.NetInfoSubscribtion = NetInfo.addEventListener(
//       this._handleConnectivityChange,
//     );

//   }

//   componentWillUnmount() {
//     this.NetInfoSubscribtion && this.NetInfoSubscribtion();
//   }

//   _handleConnectivityChange = (state) => {
//     this.setState({
//       connection_status: state.isConnected,
//       connection_net_reachable: state.isInternetReachable,
//       connection_wifi_enabled: state.isWifiEnabled,
//     })
//   }

//   render() {
//     return (
//       <View style={styles.body}>
//           <Text></Text>
//           <Text></Text>
//           <Text></Text>
//           <Text></Text>
//           <Text></Text>
//           <Text></Text>

//         <Text style={styles.buttonText}>
//           Connection Status : {this.state.connection_status ? 'Connected' : 'Disconnected'}
//         </Text>
//         <Text style={styles.buttonText}>
//           Connection Type : {this.state.connection_type}
//         </Text>
//         <Text style={styles.buttonText}>
//           Internet Reachable : {this.state.connection_net_reachable ? 'YES' : 'NO'}
//         </Text>
//         <Text style={styles.buttonText}>
//           Wifi Enabled : {this.state.connection_wifi_enabled ? 'YES' : 'NO'}
//         </Text>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   body: {
//     flex: 1,
//     padding: 20,
//     alignItems: 'center',
//     backgroundColor: '#2193b0',
//   },
//   buttonText: {
//     fontSize: 18,
//     textAlign: 'center',
//     margin: 10,
//     color: '#ffffff',
//   },
// });

// export default Inter;