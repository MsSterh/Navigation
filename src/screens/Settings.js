import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
import Button from '../components/Button'
import Name from '../components/Name'

type Props = {};
export default class Settings extends Component<Props> {
  componentDidMount() {
    console.log('Mount: Settings')
    console.log('navigation.state = ', this.props.navigation.state)
  }
  componentWillUnmount() {
    console.log('Unmount: Settings')
  }

  static navigationOptions = {
    title: 'Settings'
  }

  render() {
    return (
      <View style={styles.container}>
        <Name text='Settings' />
        <Button
          text='Go to Home'
          onPress={() => this.props.navigation.navigate('Home')}
        />
        <Button
          text='Go to Details'
          onPress={() => this.props.navigation.navigate('Details')}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 20
  }
})
