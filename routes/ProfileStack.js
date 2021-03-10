import { createStackNavigator } from 'react-navigation-stack';
import Profile from '../Screens/Profile';

const screens = {
  Profile: {
    screen: Profile,
    // navigationOptions: {
    //   title: 'About GameZone'
    // },
  },
}

const ProfileStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: '#444',
    headerStyle: { backgroundColor: '#eee', height: 60 },
  }
});

export default ProfileStack;
