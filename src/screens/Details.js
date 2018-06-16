import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
import Button from '../components/Button'
import Name from '../components/Name'

type Props = {};
export default class Details extends Component<Props> {
  componentDidMount() {
    console.log('Mount: Details')
  }
  componentWillUnmount() {
    console.log('Unmount: Details')
  }

  render() {
    return (
      <View style={styles.container}>
        <Name text='Details' />
        <Button
          text='Go to Details (navigate)'
          onPress={() => this.props.navigation.navigate('Details')}
        />
        <Button
          text='Go to Details (push)'
          onPress={() => this.props.navigation.push('Details')}
        />
        <Button
          text="Go to Home (navigate)"
          onPress={() => this.props.navigation.navigate('Home')}
        />
        <Button
          text="Go back"
          onPress={() => this.props.navigation.goBack()}
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
