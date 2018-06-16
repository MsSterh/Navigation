import { createStackNavigator } from 'react-navigation'

import Home from './screens/Home'
import Details from './screens/Details'

export default createStackNavigator(
  {
    Home: Home,
    Details: Details
  },
  {
    initialRouteName: 'Home'
  }
)
