import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import HomePage from './pages/Home'

const Stack = createStackNavigator({
  Home: {
    screen: HomePage,
    navigationOptions: ({ navigation }) => ({
      title: 'Ward',
      header: null
    })
  }
})

export default createAppContainer(Stack)