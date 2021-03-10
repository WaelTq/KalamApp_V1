import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Modal,
} from 'react-native';
import {
  Ionicons,
  Feather,
  FontAwesome,
  SimpleLineIcons,
  FontAwesome5,
  Entypo
} from '@expo/vector-icons';

export default class SaveMeeting extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity
            
          >
            <Feather name="search" size={24} color="black" />
          </TouchableOpacity>
          <Text style={[styles.text,{fontSize:15}]}>Save Meetings</Text>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Home')}>
            
            <Ionicons name="arrow-back" size={24} color="black" />
          </TouchableOpacity>
        </View>

     

        <View style={styles.contacts}>
        <View style={styles.contact}>
                <TouchableOpacity>
                <Entypo  name="dots-three-vertical" size={24} color="#055be2" />
                </TouchableOpacity>
        
                <View style={{width:'80%'}}>
                    <Text style={styles.name}>Tech. Meeting</Text>
                    <Text style={styles.email}>2021-1-31</Text>
                </View>
                <TouchableOpacity>
                <FontAwesome
              style={{marginLeft:20}}
              name="video-camera"
              size={30}
              color="#045ce2"
            />
               
                </TouchableOpacity>
        </View>

        <View style={styles.contact}>
                <TouchableOpacity>
                <Entypo  name="dots-three-vertical" size={24} color="#055be2" />
                </TouchableOpacity>
        
                <View style={{width:'80%'}}>
                    <Text style={styles.name}>Tech. Meeting</Text>
                    <Text style={styles.email}>2021-1-31</Text>
                </View>
                <TouchableOpacity>
                <FontAwesome
              style={{marginLeft:20}}
              name="video-camera"
              size={30}
              color="#045ce2"
            />
               
                </TouchableOpacity>
        </View>

        <View style={styles.contact}>
                <TouchableOpacity>
                <Entypo  name="dots-three-vertical" size={24} color="#055be2" />
                </TouchableOpacity>
        
                <View style={{width:'80%'}}>
                    <Text style={styles.name}>Tech. Meeting</Text>
                    <Text style={styles.email}>2021-1-31</Text>
                </View>
                <TouchableOpacity>
                <FontAwesome
              style={{marginLeft:20}}
              name="video-camera"
              size={30}
              color="#045ce2"
            />
               
                </TouchableOpacity>
        </View>

    
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
  },
 

name:{
    fontSize:16,
    fontFamily:'SemiBold',
    color:'#01084e'
},
email:{
    color:'#01084e'
},
contact:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'flex-end',
    padding:20,
    height:'13%'
},
contacts:{
    paddingLeft:25,
    paddingRight:25,
    height:'78%',
    marginTop:25
},

  
});