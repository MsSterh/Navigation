import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View
} from 'react-native'

type Props = {
  text: text
};
export default class Name extends Component<Props> {
  render() {
    const { text } = this.props

    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          {text}
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  }
})
