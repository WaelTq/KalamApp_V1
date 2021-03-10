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
  AntDesign,
  FontAwesome,

} from '@expo/vector-icons';

// import RoomScreen from './RoomScreen'

const SavedMeetingChat = ({navigation}) => {
    return (
        <View style={styles.container}>
        
          <View style={styles.header}>
              <TouchableOpacity onPress={() => navigation.navigate('SavedMeeting')}>
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
                color="#f3f7ff"
              />
                  </TouchableOpacity>
          
                  <View style={{width:'80%',paddingLeft:20}}>
                      <Text style={styles.name}>Tech. Meeting</Text>
                      <Text style={styles.email}>2021-01-31</Text>
                  </View>
                  <TouchableOpacity>
                  <AntDesign name="delete" size={24} color="#f3f7ff" />
                  </TouchableOpacity>
                 
          </View>      
          </View> 

          <View style={styles.chat}>
            <View style={styles.msg}>
              <Text style={styles.textMsg}>What project?😁</Text>
              <Text style={styles.time}>11:03</Text>
            </View>
            {/* <RoomScreen /> */}
            </View>        
        
        </View>
      );
}

export default SavedMeetingChat;

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


  
  main:{
  height:'80%'
  },
  info: {
    alignItems: 'center',
    height: '50%',
    width: '100%',
    backgroundColor: '#f3f7ff',
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
    color:'#f3f7ff'
},
email:{
    color:'#f3f7ff'
},
contact:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',   
    height:'10%', 
    width:'80%',
    
   
},
contacts:{
  width:'100%',
  backgroundColor:'#044fc4',
  alignItems:'center',
  height:'10%',
  
},
chat:{
  marginTop:'5%',
  height:'78%',  
  backgroundColor:'#fff',
 
}


});
    
