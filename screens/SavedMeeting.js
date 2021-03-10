import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Modal,
  ScrollView,
  ScrollViewComponent,
} from 'react-native';
import {
  Ionicons,
  Feather,
  FontAwesome,
  SimpleLineIcons,
  FontAwesome5,
  Entypo
} from '@expo/vector-icons';

const SavedMeeting = ({navigation}) => {
    return (
        <View style={styles.container}>
        
          <View style={styles.header}>
              <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                <Ionicons name="arrow-back" size={24} color="black" />
              </TouchableOpacity>
                <Text style={[styles.text,{fontSize:18}]}>Saved Meeting</Text>
            
            </View>


            <View style={styles.contacts}>
          <View style={[styles.contact,{marginTop:'10%',}]}>
          <TouchableOpacity >
            <FontAwesome
                style={{marginLeft:20}}
                name="video-camera"
                size={30}
                color="#055be2"
              />
                  </TouchableOpacity>
          
                  <View style={{width:'80%',paddingLeft:20}}>
                      <Text style={styles.name}>Tech. Meeting</Text>
                      <Text style={styles.email}>2021-01-31</Text>
                  </View>
                  <TouchableOpacity onPress={() => navigation.navigate('SavedMeetingChat')}>
                  <Entypo  name="dots-three-vertical" size={24} color="#055be2" />
                  </TouchableOpacity>
                 
          </View>
  
          <View style={styles.contact}>
          <TouchableOpacity>
          <FontAwesome
              style={{marginLeft:20}}
              name="video-camera"
              size={30}
              color="#055be2"
            />
                  </TouchableOpacity>
          
                  <View style={{width:'80%',paddingLeft:20}}>
                      <Text style={styles.name}>Tech. Meeting</Text>
                      <Text style={styles.email}>2021-01-31</Text>
                  </View>
                  <TouchableOpacity onPress={() => navigation.navigate('SavedMeetingChat')}>
                  <Entypo  name="dots-three-vertical" size={24} color="#055be2" />
                  </TouchableOpacity>
                 
          </View>

          <View style={styles.contact}>
          <TouchableOpacity>
          <FontAwesome
              style={{marginLeft:20}}
              name="video-camera"
              size={30}
              color="#055be2"
            />
          
                  </TouchableOpacity>
          
                  <View style={{width:'80%',paddingLeft:20}}>
                      <Text style={styles.name}>Tech. Meeting</Text>
                      <Text style={styles.email}>2021-01-31</Text>
                  </View>
                  <TouchableOpacity onPress={() => navigation.navigate('SavedMeetingChat')}>
                  <Entypo  name="dots-three-vertical" size={24} color="#055be2" />
                  </TouchableOpacity>
                 
          </View>
      
          </View>         
        
        </View>
      );
}

export default SavedMeeting;

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
    //   fontFamily: 'SemiBold',
      textAlign:'center',
      width:'80%'
    },
    button:{
      height:'8%',
      flexDirection:'row',
      borderBottomWidth:1,
  borderBottomColor: '#d5d5d5',
  borderColor:'#fff'
  
  
  },
  iconChat:{
      height:'100%',
      width:'50%',
      alignItems:'center',
      justifyContent:'center',
  },
  
  main:{
  height:'80%'
  },
  info: {
    alignItems: 'center',
    height: '50%',
    width: '100%',
    backgroundColor: '#f3f7ff',
  },
  dot: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: '80%',
    top:'-25%',
    width: '100%',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    bottom: 0,
    backgroundColor:'#fff'
    
  },
  inputs:{
    height:'80%',
    width:'100%',
  
  },
  textInput:{
    backgroundColor: '#f4f8fb',
    height: '13%',
    borderRadius: 5,
    marginHorizontal:35,
    marginBottom:"3%",
    textAlign: 'left',
    fontSize:14,
  },
  name:{
    fontSize:16,
  //   fontFamily:'bold',
    color:'#01084e'
},
email:{
    color:'#01084e'
},
contact:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'flex-end',
    height:'15%',
    paddingTop:10,
    paddingBottom:15,
    marginBottom:20,
    backgroundColor:'#f4f8fb'
},
contacts:{
    paddingLeft:25,
    paddingRight:25,
    height:'67%'
},

});
    
