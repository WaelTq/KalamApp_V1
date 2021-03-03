import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';

import Splash from './Screens/Splash'
import Login from './Screens/Login'
import Register from './Screens/Register'
import Home from './Screens/Home'
import Profile from './Screens/Profile'
import ChatUser from './Screens/ChatUser'
import UserJoin from './Screens/UserJoin'
import Info from './Screens/Info'
import PhonContacts from './Screens/PhonContacts'
import PhonGroup from './Screens/PhonGroup'






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
    ChatUser: {screen: ChatUser},
    UserJoin: {screen: UserJoin},
    Info: {screen: Info},
    PhonContacts: {screen: PhonContacts},
    PhonGroup: {screen: PhonGroup},

    

    
    

   
   
 
  },
  {
    defaultNavigationOptions: stackNavigatorOptions,
  }
);
export default createAppContainer(AppNavigator);