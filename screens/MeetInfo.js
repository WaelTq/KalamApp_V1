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

const MeetInfo = ({navigation}) => {
  return (
    <View style={styles.container}>
         <View style={styles.info}>
             <View style={styles.headInfo}> 
             <TouchableOpacity style={{marginLeft:10}}><Feather name="volume-2" size={24} color="#fff" /></TouchableOpacity>

                <TouchableOpacity style={{marginLeft:10}}><Ionicons name="hand-left-outline" size={24} color="#fff" /></TouchableOpacity>

                <TouchableOpacity style={{marginLeft:10}}><Entypo name="dots-three-vertical" size={24} color="#fff" /></TouchableOpacity>
              
             </View>
             <View style={styles.img}>
                <Image
                source={require('../assets/logoicon.png')}
                style={{width: '30%', height: '80%', borderRadius: 10}}
                />
                <Text style={{color:'#fff',marginTop:10,fontSize:16,fontWeight:'800',}}>Ehab Hafez </Text>
      </View>
      <View style={styles.icon}>
      <View style={styles.border}>
          <TouchableOpacity ><Ionicons name="ios-mic-sharp" size={25} color="#000" /></TouchableOpacity>
          </View>

          <View style={styles.border}>
          <TouchableOpacity ><Ionicons name="ios-call" size={25} color="red" /></TouchableOpacity>
          </View>

          <View style={styles.border}>
          <TouchableOpacity ><FontAwesome name="video-camera" size={22} color="#000" /></TouchableOpacity>
          </View>
        

      </View>
   
    </View>

        <View style={styles.button}>
        <TouchableOpacity onPress={() => navigation.navigate('MeetChat')}
style={[styles.iconChat]}> 
                <Ionicons name="md-chatbubbles-outline" size={32} color="#d5d5d5" />
            </TouchableOpacity>
         
            <TouchableOpacity style={styles.iconChat} onPress={() => navigation.navigate('MeetUsers')}> 
            <FontAwesome name="users" size={32} color="#d5d5d5" />
            </TouchableOpacity>

            <TouchableOpacity style={[styles.iconChat,{borderWidth: 2,
borderBottomColor: '#1c4c96',borderColor:'#fff'}]} 
                        onPress={() => navigation.navigate('MeetInfo')}

            > 
                <Feather name="info"  size={32} color="#1c4c96" />
            </TouchableOpacity>
          
        </View>
        <View style={styles.infoMeet}>
                <Text style={{marginTop:'7%',marginBottom:'7%',fontSize:18,fontWeight:"800",fontFamily:'SemiBold'}}>Meeting Name goes here</Text>
                <Text style={{marginBottom:'5%',fontSize:16}}>Joining info</Text>
                <Text style={{marginBottom:'5%',fontSize:14}}>https://kalalmtranslate.net/meeting/6017le96d5932dl2280c2e57</Text>
                <Text style={{marginBottom:'5%',fontSize:14}}>Pin</Text>
                <Text style={{marginBottom:'1%',fontSize:14}}>5856415348</Text>
                <TouchableOpacity style={{height:'20%',marginTop:20,flexDirection:'row',alignItems:"center",justifyContent:'flex-start',}}>
                
                <AntDesign name="sharealt" size={30} color="black" />
                <Text style={{marginRight:8,fontSize:16,fontFamily:'SemiBold'}}>Share Meeting</Text>
                </TouchableOpacity>
            </View>

        </View>
    );
    
}

export default MeetInfo;

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
      height:'10%'  ,
      justifyContent:'flex-end',
      marginRight:15,
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
infoMeet:{
    marginLeft:30,

},



});