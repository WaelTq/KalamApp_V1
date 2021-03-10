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
  ImageBackground,
  Button
} from 'react-native';
import {
  Ionicons,
  Feather,
  FontAwesome,
  SimpleLineIcons,
  FontAwesome5,
  Entypo,
  Fontisto
} from '@expo/vector-icons';

const ContactInfo = ({navigation}) => {
  return (
    <View style={styles.container}>
     <View style={styles.header}>
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
              <Ionicons name="arrow-back" size={24} color="black" />
            </TouchableOpacity>
               <Text style={[styles.text,{fontSize:18}]}>Contact Us</Text>
          
          </View>
  
          <View style={styles.button}>

          <TouchableOpacity
             onPress={() => navigation.navigate('ContactUs')}
             style={[styles.iconChat]}> 
                      <Text style={{fontSize:16}}>Send Message</Text>
                  </TouchableOpacity>
                  <TouchableOpacity 
                  style={[styles.iconChat,{borderWidth: 2,borderBottomColor: '#1c4c96',borderColor:'#fff'}]} 
                 onPress={() => navigation.navigate('ContactInfo')}
                  >
                    <Text style={{fontSize:16}}>Contact Info</Text>
                    
                  </TouchableOpacity>
                 
                 
              </View>

      <View style={styles.main}>
          <View style={styles.info}>
        <Image
        source={require('../assets/download.jpg')}
        style={{
            width: '100%',
            height: '100%',
            position: 'relative',
            top: 0,
            left: 0,
            borderBottomRightRadius: 100,
            borderBottomLeftRadius: 50,

          }}
        />
      </View>
      <View style={styles.dot}>

        <View style={styles.infoText}>
          <View style={styles.infoItem}>
          <Ionicons name="location-sharp" style={{paddingLeft:10}}  size={28} color="#085bdb" />

          <View style={{marginTop:20,paddingLeft:10}}>
              <Text style={styles.title}> Address </Text>
              <Text style={styles.titleInfo}>Bldg 174,First Floor,Office 3,C Ring,Rd,Doha,Qatar</Text>
            </View>
          </View>

          <View style={styles.infoItem}>
          <Ionicons name="md-call-sharp" style={{paddingLeft:10}}  size={28} color="#085bdb" />

          <View style={{marginTop:20,paddingLeft:10}}>
          <Text style={styles.title}> Phone </Text>
          <Text style={styles.titleInfo}>+974 4444 8846</Text>
            </View>
          </View>

          <View style={styles.infoItem}>
          <Fontisto name="email" style={{paddingLeft:10}} size={28} color="#085bdb" />

          <View style={{marginTop:20,paddingLeft:10}}>

          <Text style={styles.title}>  Email Address </Text>
              <Text style={styles.titleInfo}>info@ogoul.com</Text>
            </View>
          </View>
          </View>
        
          <View style={styles.img}>
          <ImageBackground  source={require('../assets/map.jpg')} style={styles.image}>
         
            <Button title="Please Tab To View The Map" />
        
    </ImageBackground>
          </View>
   

        </View>
     
      
        </View>
    
    </View>
  );
}

export default ContactInfo;

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: '#fafbfd',
  },
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
  height: '75%',
  backgroundColor: '#fff',
  top:'-15%',
  width: '100%',
  borderTopLeftRadius: 50,
  borderTopRightRadius: 50,
  bottom: 0,
},
infoText:{
  backgroundColor:'#f4f8fb',
  marginTop:35,
  marginHorizontal: 35,
  height:'55%',
  borderRadius:10,
  
},
infoItem:{
  flexDirection:'row',
  alignItems:'center',
  justifyContent:'flex-start',
  marginRight:15,
 
 
  
},
title:{
  fontSize:14,
  // fontFamily:'SemiBold',
  marginRight:5,
  color:'#050811',
},
titleInfo:{
  fontSize:14,
  marginRight:5,
  color:'#a4a5a7',
  marginTop:10,
},
img:{
  
  height:'25%',
  justifyContent:'center',
  alignItems:'center',
 marginTop:25,
 marginHorizontal:35
 

  // marginTop:"20%",
},
image:{
  width:'100%',
  height:"100%",
  opacity:.5,
  borderRadius:10,
  justifyContent:'center',
  alignItems:'center',
  borderRadius:10

},
link:{
  color:'#085bdb',
  fontSize:14,
  width:'60%',
  // backgroundColor:'#e5ecf4',
  height:50,
  borderRadius:10,
  opacity:1
  
}
  
});