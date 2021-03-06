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

export default class Home extends React.Component {
    state ={
        create:false,
        join:false,
        schedule:false,
    }
    createMeet =()=>{
        if(this.state.create === true){
            this.setState({
                create:false
            })
        }else if(this.state.create === false){
            this.setState({
                create:true
            })
        }        
    }
    joinMeet =()=>{
        if(this.state.join === true){
            this.setState({
                join:false
            })
        }else if(this.state.join === false){
            this.setState({
                join:true
            })
        }
       
        
    }
    scheduleMeet =()=>{
        if(this.state.schedule === true){
            this.setState({
                schedule:false
            })
        }else if(this.state.schedule === false){
            this.setState({
                schedule:true
            })
        }
    } 

    render() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Notification')}
          >
            <MaterialCommunityIcons
              name="bell-outline"
              size={24}
              color="black"
            />
          </TouchableOpacity>
          <Text
            style={{fontSize: 18, color: '#060a37', fontFamily: 'SemiBold'}}
          >
            Homepage
          </Text>
          <TouchableOpacity>
            
            <FontAwesome5 name="bars" size={24} color="black" />
          </TouchableOpacity>
        </View>
     
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
        
            <FontAwesome
              name="dot-circle-o"
              style={{marginLeft:5}}
              size={12}
              color="black"

            />  
            <FontAwesome
              name="dot-circle-o"
              style={{paddingEnd: 5}}
              size={12}
              color="black"
            />
            <FontAwesome
              name="dot-circle-o"
              style={{paddingEnd: 5}}
              size={12}
              color="#1458c3"
            />
        
        </View>
        <View style={{height: '45%',marginTop:'-20%', backgroundColor: '#fafbfd',}}>

          <TouchableOpacity 
          style={styles.meet}
          onPress={this.createMeet}
          >
              <AntDesign
              style={{marginLeft: '7%'}}
              name="arrowright"
              size={24}
              color="black"
            />
 
            <View>
              <Text style={styles.textName}>Meet Now</Text>
              <Text style={styles.text}> You can meet now easily</Text>
            </View>
            <Entypo
                style={{marginRight: '7%'}}
                name="plus"
                size={24}
                color="#045ce2"
              />
            
          </TouchableOpacity>
          <Modal style={{width:"50%",height:'50%',alignItems:'center',justifyContent:'center'}} transparent={true} visible={this.state.create}>
            <View style={styles.centeredView1}>
          <View style={styles.modalView}>
               <Text style={styles.headTitle}>Create Meeting</Text>
                <Text style={styles.defTitle}> You can meet now easily</Text>
                <TextInput style={styles.input} placeholder="      Meeting Name"/>
                <Text style={styles.selectLang}>Select Language</Text>
                <TextInput style={styles.input} placeholder="      English"/>
                <Text style={styles.selectLang}>Allow Others to edit</Text>
                <Text style={styles.textDes}>It means that ypu and all the people in the meeting can change that the text for a certain amount of time</Text>
                <Text style={styles.button1} onPress={this.createMeet} >Create Meeting</Text>
               
                </View>
                </View>
            </Modal>

          <TouchableOpacity 
          style={styles.meet}
           onPress={this.scheduleMeet}
          ><AntDesign
          style={{marginLeft: '7%'}}
          name="arrowright"
          size={24}
          color="black"
        />
            
            <View>
              <Text style={styles.textName}>Schedule Meeting</Text>
              <Text style={styles.text}> You can meet now easily</Text>
            </View>
            <FontAwesome5
              style={{marginRight: '7%'}}
              name="calendar"
              size={24}
              color="#045ce2"
            />
          </TouchableOpacity>
          <Modal style={{width:"50%",height:'50%',alignItems:'center',justifyContent:'center'}} transparent={true} visible={this.state.schedule}>
            <View style={styles.centeredView1}>
          <View style={styles.modalView}>
               <Text style={styles.headTitle}>Schedule Meeting</Text>
                <Text style={styles.defTitle}> You can meet now easily</Text>
                <TextInput style={styles.input} placeholder="      Meeting Name"/>
                <Text style={styles.selectLang}>Select Language</Text>
                <TextInput style={styles.input} placeholder="      English"/>
                <Text style={styles.selectLang}>Send to</Text>
                <TextInput style={styles.input} placeholder="      team a Group"/>
                <Text style={styles.button1} onPress={this.scheduleMeet} >Send Invitation</Text>
               
                </View>
                </View>
            </Modal>

          <TouchableOpacity 
          style={styles.meet}
          onPress={this.joinMeet}
          >
             <AntDesign
              style={{marginLeft: '7%'}}
              name="arrowright"
              size={24}
              color="black"
            />
            <View>
              <Text style={styles.textName}>Join Meeting</Text>
              <Text style={styles.text}> You can meet now easily</Text>
            </View>
            <FontAwesome
              style={{marginRight: '7%'}}
              name="video-camera"
              size={24}
              color="#045ce2"
            />
           
          </TouchableOpacity>
          <Modal  visible={this.state.join} transparent={true}>
            <View style={styles.centeredView1}>
          <View style={styles.modalView}>
          <Text style={styles.headTitle}>Join Meeting</Text>
                <Text style={styles.defTitle}> You can meet now easily</Text>
                <TextInput style={styles.input} placeholder="      Meeting ID"/>
                <Text style={styles.selectLang}>Select Language</Text>
                <TextInput style={styles.input} placeholder="      English"/>
                <Text style={styles.button1} onPress={this.joinMeet} >Join Meeting</Text>
              </View>
              </View>
            </Modal>

        </View>
        <View style={styles.footer}>
        <TouchableOpacity 
        onPress={() => this.props.navigation.navigate('Setting')} 
        style={styles.button}>
            <Feather name="settings" size={24} color="black" />
          </TouchableOpacity>

          <TouchableOpacity 
          onPress={() => this.props.navigation.navigate('Profile')}
          style={styles.button}>
            <FontAwesome5 name="user-circle" size={24} color="black" />
          </TouchableOpacity>
         
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.props.navigation.navigate('Home')}
          >
            <SimpleLineIcons name="home" size={24} color="#1458c3" />
          </TouchableOpacity>
          
        </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: "center",
        marginTop: 2,
       
      },
      centeredView1: {
        
          margin: 20,
         
        },
      modalView: {
        margin: 2,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 20,
       marginTop:'20%',
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 5
      },
      button1: {
        borderRadius: 10,
        padding: 10,
        elevation: 2,
        height:50,
              backgroundColor:'#045ce2',
        textAlign:'center',
        color:'#fff',
        fontSize:18,
        marginTop:'5%',
        marginBottom:'15%',
  
      },
      
      textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
      },
      modalText: {
        marginBottom: 15,
        textAlign: "center"
      },
      headTitle:{
          marginTop:'10%',
          fontSize:25,
          color:"#085cd9",
          fontFamily: 'SemiBold',
          textAlign:'center'
      },
      defTitle:{
          marginTop:'2%',
          marginBottom:'5%',
          fontSize:14,
          color:"#080b2c",
          
          textAlign:'center'
      },
      selectLang:{
          fontSize:16,
          color:"#2b32aa",
          marginTop: '5%',
         
      },
      textDes:{
          fontSize:14,
          color:"#9ca9b2",
          marginBottom:'3%'
          
         
      },
      input:{
          flexDirection: 'row',
          
          borderWidth: 2,
         
          borderColor: '#f4f8fb',
          backgroundColor: '#f4f8fb',
          height: 50,
          borderRadius: 5,
          marginTop: '5%',
          textAlign: 'left',
      },
  container: {height: '100%', backgroundColor: '#fafbfd'},

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: '12%',
    paddingTop: 40,
    paddingRight:20,
    paddingLeft:20,

    backgroundColor: '#e5ecf4',
  },
  textDef: {
    fontSize: 20,
    color: '#a3a6c7',
    fontFamily: 'SemiBold',
  },
  textName: {
    fontSize: 20,
    color: '#060a37',
    fontFamily: 'SemiBold',
  },
  info: {
    alignItems: 'center',
    height: '30%',
    width: '100%',
    backgroundColor: '#f3f7ff',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: '10%',
    padding: '5%',
    marginTop:5,
    backgroundColor: '#e5ecf4',
    marginHorizontal: '10%',
    paddingHorizontal: 10,
    borderRadius: 25,
    bottom: '7%',
  },
  button: {
    padding: '4%',
  },
  dot: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: '10%',
    backgroundColor: '#fafbfd',
    top: '-20%',
    width: '100%',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    bottom: 0,
  },
  meet: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 70,
    backgroundColor: '#fff',
    marginHorizontal: '10%',
    borderRadius: 15,
    marginTop: 10,
  },
});