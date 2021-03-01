import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';

import Splash from './Screens/Splash'
import Login from './Screens/Login'
import Register from './Screens/Register'
import Home from './Screens/Home'
import Profile from './Screens/Profile'



const stackNavigatorOptions = {
  headerShown: false,
};
const AppNavigator = createStackNavigator(
  {
    Splash: {screen: Splash},
    Login: {screen: Login},
    Register: {screen: Register},
    Home: {screen: Home},
    Profile: {screen: Profile},

   
   
 
  },
  {
    defaultNavigationOptions: stackNavigatorOptions,
  }
);
export default createAppContainer(AppNavigator);