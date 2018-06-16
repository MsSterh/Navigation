import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native'

type Props = {};
export default class Home extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Home
        </Text>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('Details')}>
          <View style={styles.buttonView}>
            <Text style={styles.buttonText}>
              Go to Details
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 20
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  buttonView: {
    backgroundColor: '#0099FF',
    padding: 20
  },
  buttonText: {
    textAlign: 'center',
    color: '#FFFFFF'
  }
})
