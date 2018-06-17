import { createStackNavigator, createSwitchNavigator, createBottomTabNavigator } from 'react-navigation'

import Home from './screens/Home'
import Details from './screens/Details'
import Auth from './screens/Auth'
import Register from './screens/Register'
import Settings from './screens/Settings'

const HomeNavigator = createStackNavigator(
  {
    Home: Home,
    Details: Details
  }
)

const MainNavigator = createBottomTabNavigator(
  {
    HomeTab: HomeNavigator,
    SettingsTab: Settings
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
    MainSwitch: MainNavigator
  },
  {
    initialRouteName: 'AuthSwitch',
  }
)
