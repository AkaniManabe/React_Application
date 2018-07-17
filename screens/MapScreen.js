import React, {
  Component
} from 'react';

import {
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import {
  MapView
} from 'expo';

export default class MapScreen extends Component {
  static navigationOptions = {
    title: 'Map',
  };

  render() {
    return(
      <MapView
        style={{ flex: 1 }}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
    )
  }
}
