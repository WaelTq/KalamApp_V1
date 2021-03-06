import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  Switch,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {
  Ionicons,
  Feather,
  FontAwesome,
  Entypo,
  SimpleLineIcons,
  FontAwesome5,
} from '@expo/vector-icons';

export default class Setting extends React.Component {
    state ={
        autoUpdate:false,
        sendNotification:false,
    }
     toggleSwitch = () =>{

        if(this.state.autoUpdate === true){
            this.setState({
                autoUpdate:false
            })
        }else if(this.state.autoUpdate === false){
            this.setState({
                autoUpdate:true
            })
        }
    }

    toggleSwitchNotification=()=>{
        if(this.state.sendNotification === true){
            this.setState({
                sendNotification:false
            })
        }else if(this.state.sendNotification === false){
            this.setState({
                sendNotification:true
            })
        }
    }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
    
          <Text style={[styles.text,{fontSize:15}]}>Setting</Text>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Home')}>
            
            <Ionicons name="arrow-back" size={24} color="black" />
          </TouchableOpacity>
        </View>

        <View>
            <View style={styles.lang}>
                <TouchableOpacity style={[styles.langType,{backgroundColor: '#fff',}]}><Text style={{
                    color: '#045ce2',
                    fontFamily: 'SemiBold',
                  }}>Arabic</Text></TouchableOpacity>
                <TouchableOpacity style={styles.langType}><Text style={{
                    color: '#e1faff',
                    fontFamily: 'SemiBold',
                  }}>English</Text></TouchableOpacity>
            </View>

            <View style={styles.switch}>
                
                <Switch
            trackColor={{ false: "#035be1", true: "#767577" }}
            thumbColor={this.state.autoUpdate ? "#ffffff" : "#ffffff"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={this.toggleSwitch}
            value={this.state.autoUpdate}
                 />
                 <Text style={{color: '#050811',
                    fontFamily: 'SemiBold',fontSize:12}}>Automatic Update</Text>
                 </View>
                 
                 <View style={styles.switch}>
                
                <Switch
                
            trackColor={{ false: "#035be1", true: "#767577" }}
            thumbColor={this.state.sendNotification ? "#ffffff" : "#ffffff"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={this.toggleSwitchNotification}
            value={this.state.sendNotification}
                 />
                 <Text style={{color: '#050811',
                    fontFamily: 'SemiBold',fontSize:12}}>Send Notification</Text>
                 </View>


                  <View style={styles.font}>
                <Text style={{color: '#050811',
                    fontFamily: 'SemiBold',fontSize:12}}>Font Size</Text>
                <TextInput style={styles.input}
        placeholder='Meduim'
      />      
            </View>
            <View style={styles.mainColor}> 
                <Text style={{color: '#050811',
                    fontFamily: 'SemiBold',fontSize:12}}>Main Color</Text>
                <View style={styles.color}>
                    <TouchableOpacity style={styles.circleColor}>
                <FontAwesome name="circle" size={28} color="#7fbcfd" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.circleColor}>
                <FontAwesome name="circle" size={28} color="#d8f0d6" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.circleColor}>
                <FontAwesome name="circle" size={28} color="#ffead9" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.circleColor}>
                <FontAwesome name="circle" size={28} color="#9598ff" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.circleColor}>
                <FontAwesome name="circle" size={28} color="#045ce2" />
                </TouchableOpacity>
                
                </View>
            </View>
        </View>

    
        <View style={styles.footer}>
        <TouchableOpacity 
        onPress={() => this.props.navigation.navigate('Setting')} 
        style={styles.button}>
            <Feather name="settings" size={24} color="#1458c3" />
          </TouchableOpacity>

          <TouchableOpacity 
          onPress={() => this.props.navigation.navigate('Profile')}
          style={styles.button}>
            <FontAwesome5 name="user-circle" size={24} color="#black" />
          </TouchableOpacity>
         
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.props.navigation.navigate('Home')}
          >
            <SimpleLineIcons name="home" size={24} color="black" />
          </TouchableOpacity>
       
          
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: '100%', 
    backgroundColor: '#fafbfd'
  },
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
    paddingRight:'20%',
    textAlign:'center',
    width:'80%'
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: '10%',
    padding: "5%",
    marginTop:20,
    backgroundColor: '#e5ecf4',
    marginHorizontal: '10%',
    paddingHorizontal: 10,
    borderRadius: 25,
  },
  button: {
    padding: '4%',
  },
  lang:{
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 10,
    marginTop: 20,
    height: 50,
      
  },
  langType:{
    marginRight: 5,
    marginLeft: 5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#045ce2',
    borderRadius: 10,
    width: 140,
    textAlign:'center',
    borderWidth:1,
    borderColor:"#045ce2"
  },
  switch:{
      flexDirection:'row',
      justifyContent:'space-between',
      paddingHorizontal:10,
    marginHorizontal: '10%',
    borderWidth: 2,
    paddingHorizontal: 10,
    borderColor: '#f4f8fb',
    backgroundColor: '#f4f8fb',
    height: '12%',
    borderRadius: 10,
    marginTop: '3%',
    textAlign: 'center',
    alignItems:'center'
      
  },
  font:{
      height:'10%',
      width:'100%',
      paddingHorizontal:25,
      marginVertical:25
  },
  input:{
    flexDirection: 'row',
    paddingHorizontal:10,
    marginHorizontal: '4%',
    borderWidth: 2,
    borderColor: '#f4f8fb',
    backgroundColor: '#f4f8fb',
    height: '100%',
    width:'92%',
    borderRadius: 10,
    marginTop: 5,
    textAlign: 'left',
  },
  mainColor:{
    height:'10%',
    width:'100%',
    paddingHorizontal:25,
    marginVertical:25
},
color:{
    flexDirection: 'row',
    justifyContent:'flex-end',
},
circleColor:{
    margin:5,
    
}
});