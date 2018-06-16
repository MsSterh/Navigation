import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native'

type Props = {
  onPress: func,
  text: string
};

export default class Button extends Component<Props> {
  render() {
    const { onPress, text } = this.props

    return (
      <TouchableOpacity onPress={onPress}>
        <View style={styles.buttonView}>
          <Text style={styles.buttonText}>
            {text}
          </Text>
        </View>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  buttonView: {
    backgroundColor: '#0099FF',
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginVertical: 5
  },
  buttonText: {
    textAlign: 'center',
    color: '#FFFFFF'
  }
})
