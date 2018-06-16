import { createStackNavigator, createSwitchNavigator } from 'react-navigation'

import Home from './screens/Home'
import Details from './screens/Details'
import Auth from './screens/Auth'
import Register from './screens/Register'

const HomeNavigator = createStackNavigator(
  {
    Home: Home,
    Details: Details
  },
  {
    initialRouteName: 'Home'
  }
)

const AuthNavigator = createStackNavigator(
  {
    Auth: Auth,
    Register: Register
  }
)

export default createSwitchNavigator(
  {
    AuthSwitch: AuthNavigator,
    HomeSwitch: HomeNavigator
  },
  {
    initialRouteName: 'AuthSwitch',
  }
)
