import React, {
  Component
} from 'react';

import {
  StyleSheet,
  Text,
  ScrollView,
} from 'react-native';

export default class SettingsScreen extends Component {
  static navigationOptions = {
    title: 'Settings',
  };

  render() {
    return(
      <ScrollView style={styles.container}>
        <Text> SettingsScreen </Text>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10
  }
});
