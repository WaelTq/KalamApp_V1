import React, {Component} from 'react';
import {View,StyleSheet,Dimensions,Image} from 'react-native';

import {Avatar,Title,Caption,Paragraph,Drawer,Text,TouchableRipple,Switch} from 'react-native-paper';
import {DrawerContentScrollView,DrawerItem} from '@react-navigation/drawer';

import {
    Ionicons,
    Feather,
    FontAwesome,
    SimpleLineIcons,
    FontAwesome5,
    Entypo
  } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const vw = Dimensions.get('window').width/100;
const vh = Dimensions.get('window').height/100;

const SideMenu = (props) => {

    const [cDarkTheme, setcDarkTheme] = React.useState(false);

    const toggleTheme = () => {
        setcDarkTheme(!cDarkTheme);
    }
    return (
        <View style={{flex:1 ,height:'100%'}}> 
            <DrawerContentScrollView {...props} > 
                <View style={[styles.userInfoSection,{height:'35%',backgroundColor:'#f3f7ff'}]}>
                    <View style={{alignItems:'flex-start',justifyContent:'center',backgroundColor:'#f3f7ff',width:'100%'}}>
                        <Image 
                            source={require('../assets/logoicon.png')}
                            style={{width:80,height:80 }}
                        />
                         <View style={{ width:'100%',flexDirection:'column',alignItems:'flex-start',backgroundColor:'#f3f7ff'}}>
                            <Title style={styles.title}>Ehab Hafez</Title>
                            <Caption style={styles.caption}>ehabfcih94@outlook.sa</Caption>
                        </View>
                    </View>                
                </View>
                {/* Drawer Section */}
                <Drawer.Section style={{height:'50%'}}>
                    <DrawerItem 
                        icon = { ()=> ( <Entypo name="home" size={30} style={{color:'#045ce2' ,marginTop:20}}/> ) } 
                        label="Home"
                        onPress={ ()=>{props.navigation.navigate('Home')} }
                    />

                    <DrawerItem 
                        icon = { ()=> ( <FontAwesome  name="address-book-o" size={30} color="#055be2" /> ) } 
                        label="Phone Book"
                        onPress={ ()=>{props.navigation.navigate('PhoneBook')} }
                    />
                     <DrawerItem 
                        icon = { ()=> ( <FontAwesome name="video-camera" size={30} color="#055be2"  />) } 
                        label="Saved Meetings"
                        onPress={ ()=>{props.navigation.navigate('wallet')} }
                    />
                     <DrawerItem 
                        icon = { ()=> ( <Ionicons name="ios-settings-sharp" size={30} color="#055be2"/> ) } 
                        label="Setting"
                        onPress={ ()=>{props.navigation.navigate('Settings')} }
                    />
                     <DrawerItem 
                        icon = { ()=> ( <Ionicons name="ios-call-sharp" size={30} color="#055be2" />  ) } 
                        label="Contact Us"
                        onPress={ ()=>{props.navigation.navigate('ContactUs')} }
                    />
                 
                </Drawer.Section>
                <Drawer.Section style={styles.bottomDrawerSection}>
              
                <DrawerItem 
                   
                    icon = { ()=>( <Icon name="exit-to-app"  style={{fontSize:30,color:'#045ce2'}} /> ) }
                    label="Logout"
                    onPress={() => {signOut()}}
                />
                </Drawer.Section>

                
            </DrawerContentScrollView>
          
        </View>
    )
}

export default SideMenu;

const styles = StyleSheet.create({
    drawerContent: {
      flex: 1,
    },
    userInfoSection: {
      padding:'10%',
      height:'40%',
      backgroundColor:'#f3f7ff'
      
    },
    title: {
      fontSize: 20,
      marginTop: 3,
      fontWeight: 'bold',
      color:'#000755'
    },
    caption: {
      fontSize: 14,
      lineHeight: 14,
      color:'#000755'
    },
    row: {
      marginTop: 2*vh,
      flexDirection: 'row',
      alignItems: 'center',
      paddingLeft:1*vh
    },
    section: {
      flexDirection: 'row',
      alignItems: 'center',
      marginRight: 1.5*vh,
    },
    paragraph: {
      fontWeight: 'bold',
      marginRight: 1*vw,
    },
    drawerSection: {
      marginTop: 1.5*vh,
    },
    bottomDrawerSection: {
        borderTopColor: '#f4f4f4',
        height:'20%',
        marginTop:'15%',

        
       
    },
    preference: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 12,
      paddingHorizontal: 16,
    },
  });