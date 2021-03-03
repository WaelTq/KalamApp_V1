import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  Modal,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {
  Ionicons,
  Feather,
  FontAwesome,
  SimpleLineIcons,
  FontAwesome5,
  MaterialCommunityIcons,
  AntDesign,
  Entypo,
} from '@expo/vector-icons';

export default class ChatUser extends React.Component {
    
    render() {
    return (
        <View style={styles.container}>
             <View style={styles.info}>
                 <View style={styles.headInfo}> 
                    <TouchableOpacity style={{marginLeft:10}}><Entypo name="dots-three-vertical" size={24} color="#fff" /></TouchableOpacity>
                    <TouchableOpacity style={{marginLeft:10}}><Ionicons name="hand-left-outline" size={24} color="#fff" /></TouchableOpacity>
                    <TouchableOpacity style={{marginLeft:10}}><Feather name="volume-2" size={24} color="#fff" /></TouchableOpacity>
                 </View>
                 <View style={styles.img}>
                    <Image
                    source={require('../assets/favicon.png')}
                    style={{width: '30%', height: '80%', borderRadius: 10}}
                    />
                    <Text style={{color:'#fff',marginTop:10,fontSize:16,fontWeight:'800',}}>Ehab Hafez </Text>
          </View>
          <View style={styles.icon}>
              <View style={styles.border}>
              <TouchableOpacity ><FontAwesome name="video-camera" size={22} color="#000" /></TouchableOpacity>
              </View>
              <View style={styles.border}>
              <TouchableOpacity ><Ionicons name="ios-call" size={25} color="red" /></TouchableOpacity>
              </View>
              <View style={styles.border}>
              <TouchableOpacity ><Ionicons name="ios-mic-sharp" size={25} color="#000" /></TouchableOpacity>
              </View>

          </View>
       
        </View>

            <View style={styles.button}>
                <TouchableOpacity style={styles.iconChat} 
                            onPress={() => this.props.navigation.navigate('Info')}

                > 
                    <Feather name="info"  size={32} color="#d5d5d5" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.iconChat} onPress={() => this.props.navigation.navigate('UserJoin')}> 
                <FontAwesome name="users" size={32} color="#d5d5d5" />
                </TouchableOpacity>
                <TouchableOpacity                             onPress={() => this.props.navigation.navigate('ChatUser')}
 style={[styles.iconChat,{borderWidth: 2,
    borderBottomColor: '#1c4c96',borderColor:'#fff'}]}> 
                    <Ionicons name="md-chatbubbles-outline" size={32} color="#1c4c96" />
                </TouchableOpacity>
            </View>

            <View style={styles.Message}>

            </View>

            <View style={styles.sendMessage}>
              
                <TouchableOpacity style={styles.send}>
                <FontAwesome name="send" size={24} color="#fff" />
                </TouchableOpacity>
                <TextInput 
                style={{width:'82%' ,fontSize:15,marginRight:10,marginLeft:5}}
                placeholder="Send Message"
                placeholderTextColor="#040a3a"
                textAlign="left"
                underlineColorAndroid="#b9bfcd"
                
                
                />
            </View>

        </View>
    );
  }
}

const styles = StyleSheet.create({
    container:{
        height:"100%",
        backgroundColor:'#fff'
    },
    info:{
        
        paddingTop: 30,
        height:"40%",
        backgroundColor:'#000'
    },
    headInfo:{
        flexDirection:'row',
        alignItems:'flex-end',
        height:'10%'  
    },
    img:{
        height:"60%",
        alignItems:'center',
        paddingTop:15,
    },
    icon:{
        height:'10%',
        flexDirection:'row',
        alignItems:'center',
        marginTop:20,
        marginBottom:10,
        justifyContent:'center',
    },
    border:{
        width:50,
        height:50,
        backgroundColor:"#fff",
        margin:7,
        marginTop:20,
        borderRadius:25,
        alignItems:'center',
        justifyContent:"center"
    },
    button:{
        height:'10%',
        flexDirection:'row',
        borderWidth: 1,
    borderBottomColor: '#d5d5d5',
    borderColor:'#fff'


    },
    iconChat:{
        height:'100%',
        width:'33.3%',
        alignItems:'center',
        justifyContent:'center'
    },
    Message:{ 
        height:'37%',
    },
    sendMessage:{ 
        flexDirection:'row',
        height:'13%',
        backgroundColor:'#e5ecf4',
        padding:20,
        justifyContent:'space-between'

    },
    send:{
        width:50,
        height:50,
        backgroundColor:'#045ce2',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:10,
    },


});