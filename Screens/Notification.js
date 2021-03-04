import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {
  Ionicons,
 
  MaterialCommunityIcons,
} from '@expo/vector-icons';

export default class Profile extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
      
          <Text style={[styles.text,{fontSize:15}]}>Notification</Text>
          <TouchableOpacity style={{marginRight:15}} onPress={() => this.props.navigation.navigate('Home')}>
            
            <Ionicons name="arrow-back" size={24} color="black" />
          </TouchableOpacity>
        </View>
        <View style={styles.notifications}>
            <TouchableOpacity style={[styles.notification,{marginTop:30}]}>
                <Text style={styles.textNotification}>Lorem lpsum Is Placeholder Text Commonly Used In Graphic, Print ,And</Text>
                <MaterialCommunityIcons
              name="bell-outline"
              size={28}
              color="#045ce2"
            />
            </TouchableOpacity>


            <TouchableOpacity style={styles.notification}>
                <Text style={styles.textNotification}>Lorem lpsum Is Placeholder Text Commonly Used In Graphic, Print ,And</Text>
                <MaterialCommunityIcons
              name="bell-outline"
              size={28}
              color="#045ce2"
            />
            </TouchableOpacity>

            <TouchableOpacity style={styles.notification}>
                <Text style={styles.textNotification}>Lorem lpsum Is Placeholder Text Commonly Used In Graphic, Print ,And</Text>
                <MaterialCommunityIcons
              name="bell-outline"
              size={28}
              color="#045ce2"
            />
            </TouchableOpacity>

            <TouchableOpacity style={styles.notification}>
                <Text style={styles.textNotification}>Lorem lpsum Is Placeholder Text Commonly Used In Graphic, Print ,And</Text>
                <MaterialCommunityIcons
              name="bell-outline"
              size={28}
              color="#045ce2"
            />
            </TouchableOpacity>

            <TouchableOpacity style={styles.notification}>
                <Text style={styles.textNotification}>Lorem lpsum Is Placeholder Text Commonly Used In Graphic, Print ,And</Text>
                <MaterialCommunityIcons
              name="bell-outline"
              size={28}
              color="#045ce2"
            />
            </TouchableOpacity>

            <TouchableOpacity style={styles.notification}>
                <Text style={styles.textNotification}>Lorem lpsum Is Placeholder Text Commonly Used In Graphic, Print ,And</Text>
                <MaterialCommunityIcons
              name="bell-outline"
              size={28}
              color="#045ce2"
            />
            </TouchableOpacity>
        </View>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {height: '100%', backgroundColor: '#fafbfd'},
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: '12%',
    paddingTop: 40,
    paddingRight:20,
    paddingLeft:20,

    backgroundColor: '#f3f7ff',
  },
  text: {
    fontSize: 10,
    color: '#030848',
    fontFamily: 'SemiBold',
    textAlign:'center',
    width:'94%'
  },
  notifications:{
      backgroundColor:'#fafbfd',
      height:'88%',
  },
  notification:{
      backgroundColor:'#fff',
      marginBottom:25,
      marginRight:25,
      marginLeft:25,
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'flex-end',
      height:'10%',
      padding: '5%',
      borderRadius:5,
  },
  textNotification:{
    marginRight:10,
    fontSize:14
  },
 
});