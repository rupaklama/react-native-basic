
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import ComponentsScreen from './src/screens/ComponentsScreen';
import HomeScreen from './src/screens/HomeScreen';
import ListScreen from './src/screens/ListScreen';
import ImageScreen from './src/screens/ImageScreen';

// creating Stack navigator object to create routes
// This is also known as App Navigator to show different screens
const navigator = createStackNavigator(
  {
    // first arg is the route config object to navigate around different screens
    // when using Stack navigator, at least need to have one screen
    Home: HomeScreen,
    Components: ComponentsScreen,
    List: ListScreen,
    Image: ImageScreen
  },
  {
    // as second arg, setting default route to show anytime app starts up
    // note - name needs to be exact same in above route config - Home: HomeScreen
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'My App',
    },
  }
);

export default createAppContainer(navigator);
