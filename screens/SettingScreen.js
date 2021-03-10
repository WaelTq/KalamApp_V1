
import React, {useState} from 'react';
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
  MaterialIcons,
} from '@expo/vector-icons';

const SettingScreen = ({navigation}) => {
    const [isUpdate, setIsUpdate] = useState(false);
    const update = () => setIsUpdate(previousState => !previousState);

    const [isSendNotification, setIsSendNotification] = useState(false);
    const sendNotification = () => setIsSendNotification(previousState => !previousState);

    return (
        <View style={styles.container}>
          <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
              <Ionicons name="arrow-back" size={24} color="black" />
            </TouchableOpacity>
            <Text style={[styles.text,{fontSize:18}]}>Setting</Text>
           
          </View>
  
          <View>
              <View style={styles.lang}>
              <TouchableOpacity style={styles.langType}><Text style={{
                      color: '#e1faff',
                     
                    }}>English</Text></TouchableOpacity>
                  <TouchableOpacity style={[styles.langType,{backgroundColor: '#fff',}]}><Text style={{
                      color: '#045ce2',
                     
                    }}>Arabic</Text></TouchableOpacity>
              
              </View>
  
              <View style={styles.switch}>
              <Text style={{color: '#050811',
                     fontSize:14}}>Automatic Update</Text>
                  <Switch
              trackColor={{ false: "#767577", true: "#035be1" }}
              thumbColor={isUpdate? "#ffffff" : "#ffffff"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={update}
              value={isUpdate}
                   />
                   
                   </View>
                   
                   <View style={styles.switch}>
                   <Text style={{color: '#050811',
                     fontSize:14}}>Send Notification</Text>
                  
                  <Switch
                  
              trackColor={{ true: "#035be1", false: "#767577" }}
              thumbColor={isSendNotification ? "#ffffff" : "#ffffff"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={sendNotification}
              value={isSendNotification}
                   />
                   
                   </View>
  
  
                    <View style={styles.font}>
                  <Text style={{color: '#050811',
                     fontSize:14}}>Font Size</Text>
                  <TextInput style={styles.input}
          placeholder='Meduim'
        />      
              </View>
              <View style={styles.mainColor}> 
                  <Text style={{color: '#050811',
                     fontSize:14}}>Main Color</Text>
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
              style={styles.button}
              onPress={() => navigation.navigate('Home')}
            >
               <MaterialIcons name="home" size={26} color="black" />
            </TouchableOpacity>

            <TouchableOpacity 
            onPress={() => navigation.navigate('Profile')}
            style={styles.button}>
              <FontAwesome5 name="user-circle" size={24} color="#black" />
            </TouchableOpacity>

            <TouchableOpacity 
          onPress={() => navigation.navigate('Setting')} 
          style={styles.button}>
              <Feather name="settings" size={24} color="#1458c3" />
            </TouchableOpacity>
         
            
          </View>
        </View>
      );
}

export default SettingScreen




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
      justifyContent:'flex-start',
  },
  circleColor:{
      margin:5,
      
  }
  });
