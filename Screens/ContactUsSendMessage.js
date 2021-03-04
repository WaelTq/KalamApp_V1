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

export default class ContactUsSendMessage extends React.Component {
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
                style={[styles.iconChat]} 
               onPress={() => this.props.navigation.navigate('ContactUsInfo')}
                >
                  <Text>Contact Info</Text>
                  
                </TouchableOpacity>
               
                <TouchableOpacity  onPress={() => this.props.navigation.navigate('ContactUsSendMessage')}
 style={[styles.iconChat,{borderWidth: 2,
    borderBottomColor: '#1c4c96',borderColor:'#fff'}]}> 
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

          <View style={styles.inputs}>
            <TextInput style={styles.textInput} placeholder='   Full Name'/>
            <TextInput style={styles.textInput} placeholder='   Email'/>
            <TextInput style={styles.textInput} placeholder='   Subject'/>
            <TextInput  multiline={true}
    numberOfLines={10} style={[styles.textInput,{ height:100, textAlignVertical: 'top',}]} placeholder='   Write your Message'/>
     <TouchableOpacity
            style={{
              marginHorizontal: '10%',
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: 10,
              backgroundColor: '#045ce2',
              paddingVertical: 10,
              borderRadius: 10,
              height: '15%',
            }}
            onPress={() => this.props.navigation.navigate('Home')}
            >
            <Text
              style={{
                color: '#e1faff',
                fontFamily: 'SemiBold',
              }}
            >
              Contact Us
            </Text>
          </TouchableOpacity>
          </View>

            
          <View style={styles.buttonContact}></View>
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
}
  
});