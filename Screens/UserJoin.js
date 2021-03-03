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

export default class UserJoin extends React.Component {
    
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
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Info')} style={[styles.iconChat]}> 
                    <Feather name="info"  size={32} color="#d5d5d5" />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('UserJoin')} style={[styles.iconChat,{borderWidth: 2,
    borderBottomColor: '#1c4c96',borderColor:'#fff'}]}> 
                <FontAwesome name="users" size={32} color="#1c4c96" />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('ChatUser')} style={[styles.iconChat]}> 
                    <Ionicons name="md-chatbubbles-outline" size={32} color="#d5d5d5" />
                </TouchableOpacity>
            </View>

            <View style={styles.users}>

                <View style={[styles.user ,{marginTop:'3%'}]}>
                <View style={styles.text}>
                    <Text style={styles.name}>Ehab Hafez </Text>
                    <Text style={styles.email}>ehabfich94@outlook.sa</Text>
                </View>
                <View style={styles.headName}>
                    <Text style={{fontSize:18,
        fontFamily:'SemiBold',color:'#135ac4'}}>EH</Text>
                </View>
                </View>

                <View style={styles.user}>
                <View>
                    <Text style={styles.name}>Ehab Hafez </Text>
                    <Text style={styles.email}>ehabfich94@outlook.sa</Text>
                </View>
                <View style={styles.headName}>
                    <Text style={{fontSize:18,
        fontFamily:'SemiBold',color:'#135ac4'}}>EH</Text>
                </View>
                </View>

                <View style={styles.user}>
                <View>
                    <Text style={styles.name}>Ehab Hafez </Text>
                    <Text style={styles.email}>ehabfich94@outlook.sa</Text>
                </View>
                <View style={styles.headName}>
                    <Text style={{fontSize:18,
        fontFamily:'SemiBold',color:'#135ac4'}}>EH</Text>
                </View>
                </View>

                <View style={styles.user}>
                <View>
                    <Text style={styles.name}>Ehab Hafez </Text>
                    <Text style={styles.email}>ehabfich94@outlook.sa</Text>
                </View>
                <View style={styles.headName}>
                    <Text style={{fontSize:18,
        fontFamily:'SemiBold',color:'#135ac4'}}>EH</Text>
                </View>
                </View>
                
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
    users:{
        height:'50%',
    },
    user:{
        flexDirection:'row',
        justifyContent:'flex-end',
        marginRight:20,
        marginLeft:20,
        borderBottomWidth:1,
        borderBottomColor:'#f0f0f0',
        height:'20%',
        paddingTop:10,

        
    },
    text:{
        // justifyContent:'center'
    },
    name:{
        fontSize:16,
        fontFamily:'SemiBold',
        color:'#01084e'
    },
    email:{
        color:'#01084e'
    },
    headName:{
        width:'17%',
        height:'80%',
        paddingRight:'4%',
        paddingTop:'4%',
        backgroundColor:'#e5ecf4',
        borderRadius:15,
        marginLeft:10,
    }


});