
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

const Notification = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
              <Ionicons name="arrow-back" size={24} color="black" />
            </TouchableOpacity>
               <Text style={[styles.text,{fontSize:18}]}>Notification</Text>
          
          </View>
      <View style={styles.notifications}>
      <TouchableOpacity style={[styles.notification,{marginTop:"7%"}]}>
          <MaterialCommunityIcons
            name="bell-outline"
            size={28}
            color="#045ce2"
            style={{marginRight:-15,}}
          />
              <Text style={styles.textNotification}>Lorem lpsum Is Placeholder Text Commonly Used In Graphic, Print ,And</Text>
          </TouchableOpacity>


          <TouchableOpacity style={styles.notification}>
          <MaterialCommunityIcons
            name="bell-outline"
            size={28}
            color="#045ce2"
            style={{marginRight:-15,}}
          />
              <Text style={styles.textNotification}>Lorem lpsum Is Placeholder Text Commonly Used In Graphic, Print ,And</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.notification}>
          <MaterialCommunityIcons
            name="bell-outline"
            size={28}
            color="#045ce2"
            style={{marginRight:-15,}}
          />
              <Text style={styles.textNotification}>Lorem lpsum Is Placeholder Text Commonly Used In Graphic, Print ,And</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.notification}>
          <MaterialCommunityIcons
            name="bell-outline"
            size={28}
            color="#045ce2"
            style={{marginRight:-15,}}
          />
              <Text style={styles.textNotification}>Lorem lpsum Is Placeholder Text Commonly Used In Graphic, Print ,And</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.notification}>
          <MaterialCommunityIcons
            name="bell-outline"
            size={28}
            color="#045ce2"
            style={{marginRight:-15,}}
          />
              <Text style={styles.textNotification}>Lorem lpsum Is Placeholder Text Commonly Used In Graphic, Print ,And</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.notification}>
          <MaterialCommunityIcons
            name="bell-outline"
            size={28}
            color="#045ce2"
            style={{marginRight:-15,}}
          />
              <Text style={styles.textNotification}>Lorem lpsum Is Placeholder Text Commonly Used In Graphic, Print ,And</Text>
          </TouchableOpacity>
      </View>
      
    </View>
  );
}

export default Notification

const styles = StyleSheet.create({
  container: {height: '100%', backgroundColor: '#fafbfd'},
  header: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    height: '12%',
    paddingTop: 40,
    paddingLeft:20,
    backgroundColor: '#f3f7ff',
  },
  text: {
    fontSize: 10,
    color: '#030848',
    // fontFamily: 'SemiBold',
    textAlign:'center',
    width:'80%'
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
    marginLeft:25,
    fontSize:14
  },
 
});