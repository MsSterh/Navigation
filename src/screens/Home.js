import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
import Button from '../components/Button'
import Name from '../components/Name'

type Props = {};
export default class Home extends Component<Props> {
  componentDidMount() {
    console.log('Mount: Home')
    console.log('navigation.state = ', this.props.navigation.state)
  }
  componentWillUnmount() {
    console.log('Unmount: Home')
  }

  static navigationOptions = {
    title: 'Home'
  }

  render() {
    return (
      <View style={styles.container}>
        <Name text='Home' />
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
