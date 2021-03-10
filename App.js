import * as React from 'react';
import { Button, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import HomeScreen from './screens/HomeScreen';
import SettingsScreen from  './screens/SettingScreen';
import SideMenu from './component/SideMenu';
import PhoneBook from './screens/PhoneBook';
import PhoneGroups from './screens/PhoneGroups';
import ContactUs from './screens/ContactUs';
import ContactInfo from './screens/ContactInfo';
import Profile from './screens/Profile';
import Notification from './screens/Notification';
import Splash from './screens/Splash';
import Login from './screens/Login';
import Register from './screens/Register';
import MeetChat from './screens/MeetChat';
import MeetUsers from './screens/MeetUsers';
import MeetInfo from './screens/MeetInfo';












const Drawer = createDrawerNavigator();

 function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={ props => <SideMenu {...props} /> }>
      <Drawer.Screen name="Splash" component={Splash} />
      <Drawer.Screen name="Login" component={Login} />
      <Drawer.Screen name="Register" component={Register} />


      

        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Settings" component={SettingsScreen} />

        <Drawer.Screen name="PhoneBook" component={PhoneBook} />
        <Drawer.Screen name="PhoneGroups" component={PhoneGroups} />

        <Drawer.Screen name="ContactUs" component={ContactUs} />
        <Drawer.Screen name="ContactInfo" component={ContactInfo} />

        <Drawer.Screen name="Profile" component={Profile} />
        <Drawer.Screen name="Notification" component={Notification} />

        <Drawer.Screen name="MeetChat" component={MeetChat} />
        <Drawer.Screen name="MeetUsers" component={MeetUsers} />
        <Drawer.Screen name="MeetInfo" component={MeetInfo} />

        
        


        


      </Drawer.Navigator>
    </NavigationContainer>
  );
}


export default App;

