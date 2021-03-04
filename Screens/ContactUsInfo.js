import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Modal,
  ImageBackground,
  ScrollView
} from 'react-native';
import {
  Ionicons,
  Fontisto,
  Feather,
  FontAwesome,
  SimpleLineIcons,
  FontAwesome5,
  Entypo
} from '@expo/vector-icons';



export default class ContactUsInfo extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
        
          <Text style={[styles.text,{fontSize:15}]}>Contact Us</Text>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Home')}>
            
            <Ionicons name="arrow-back" size={24} color="black" />
          </TouchableOpacity>
        </View>

        <View style={styles.button}>
                <TouchableOpacity 
                style={[styles.iconChat,{borderWidth: 2,
                    borderBottomColor: '#1c4c96',borderColor:'#fff'}]} 
               onPress={() => this.props.navigation.navigate('ContactUsInfo')}
                >
                  <Text>Contact Info</Text>
                  
                </TouchableOpacity>
               
                <TouchableOpacity  onPress={() => this.props.navigation.navigate('ContactUsSendMessage')}
 style={[styles.iconChat]}> 
                    <Text>Send Message</Text>
                </TouchableOpacity>
            </View>

        <View style={styles.main}>
            <View style={styles.info}>
          <Image
          source={require('../assets/image/download.jpg')}
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
            <View style={{marginTop:20}}>
                <Text style={styles.title}> Address </Text>
                <Text style={styles.titleInfo}>Bldg 174,First Floor,Office 3,C Ring,Rd,Doha,Qatar</Text>
              </View>
              <Ionicons name="location-sharp" size={28} color="#085bdb" />
            </View>

            <View style={styles.infoItem}>
            <View style={{marginTop:20}}>
            <Text style={styles.title}> Phone </Text>
            <Text style={styles.titleInfo}>+974 4444 8846</Text>
              </View>
            <Ionicons name="md-call-sharp" size={28} color="#085bdb" />
            </View>

            <View style={styles.infoItem}>
            <View style={{marginTop:20}}>

            <Text style={styles.title}>  Email Address </Text>
                <Text style={styles.titleInfo}>info@ogoul.com</Text>
              </View>
            <Fontisto name="email" size={28} color="#085bdb" />
            </View>
            </View>
          
            <View style={styles.img}>
            <ImageBackground source={require('../assets/image/map.jpg')} style={styles.image}>
          <Text style={styles.link}>Please Tab To View The Map</Text>
      </ImageBackground>
            </View>
     

          </View>
       
        
          </View>
      
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: '#fafbfd',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
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
  top:'-25%',
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
  justifyContent:'flex-end',
  marginRight:15,
 
 
  
},
title:{
  fontSize:14,
  fontFamily:'SemiBold',
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
  
  height:'35%',
  justifyContent:'center',
  alignItems:'center',
 margin:35,
 

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
  backgroundColor:'#e5ecf4',
  height:50,
  borderRadius:10
  
}
  
});