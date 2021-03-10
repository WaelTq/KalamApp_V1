import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Modal,
} from 'react-native';
import {
  Ionicons,
  Feather,
  FontAwesome,
  SimpleLineIcons,
  FontAwesome5,
  Entypo
} from '@expo/vector-icons';
const PhoneBook = ({navigation}) => {
    return (
        <View style={styles.container}>

          <View style={styles.header}>
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
              <Ionicons name="arrow-back" size={24} color="black" />
            </TouchableOpacity>
               <Text style={[styles.text,{fontSize:18}]}>Phone Book</Text>
            <TouchableOpacity            
            >
              <Feather name="search" size={24} color="black" />
            </TouchableOpacity>
          </View>
  
          <View style={styles.button}>

          <TouchableOpacity
             onPress={() => navigation.navigate('PhoneBook')}
             style={[styles.iconChat,
                {borderWidth: 2,borderBottomColor: '#1c4c96',borderColor:'#fff'}]}> 
                      <Text style={{fontSize:16}}> My Contacts</Text>
                  </TouchableOpacity>
                  <TouchableOpacity 
                  style={styles.iconChat} 
                 onPress={() => navigation.navigate('PhoneGroups')}
                  >
                    <Text style={{fontSize:16}}>My Groups</Text>
                    
                  </TouchableOpacity>
                 
                 
              </View>
  
          <View style={styles.contacts}>
          <View style={styles.contact}>
          <TouchableOpacity>
                  <FontAwesome style={{marginLeft:20}} name="address-book-o" size={30} color="#055be2" />
                  </TouchableOpacity>
          
                  <View style={{width:'80%',paddingLeft:20}}>
                      <Text style={styles.name}>Ehab Hafez </Text>
                      <Text style={styles.email}>ehabfich94@outlook.sa</Text>
                  </View>
                  <TouchableOpacity>
                  <Entypo  name="dots-three-vertical" size={24} color="#055be2" />
                  </TouchableOpacity>
                 
          </View>
  
          <View style={styles.contact}>
          <TouchableOpacity>
                  <FontAwesome style={{marginLeft:20}} name="address-book-o" size={30} color="#055be2" />
                  </TouchableOpacity>
          
                  <View style={{width:'80%',paddingLeft:20}}>
                      <Text style={styles.name}>Ehab Hafez </Text>
                      <Text style={styles.email}>ehabfich94@outlook.sa</Text>
                  </View>
                  <TouchableOpacity>
                  <Entypo  name="dots-three-vertical" size={24} color="#055be2" />
                  </TouchableOpacity>
                 
          </View>

          <View style={styles.contact}>
          <TouchableOpacity>
                  <FontAwesome style={{marginLeft:20}} name="address-book-o" size={30} color="#055be2" />
                  </TouchableOpacity>
          
                  <View style={{width:'80%',paddingLeft:20}}>
                      <Text style={styles.name}>Ehab Hafez </Text>
                      <Text style={styles.email}>ehabfich94@outlook.sa</Text>
                  </View>
                  <TouchableOpacity>
                  <Entypo  name="dots-three-vertical" size={24} color="#055be2" />
                  </TouchableOpacity>
                 
          </View>

         <View style={styles.contact}>
          <TouchableOpacity>
                  <FontAwesome style={{marginLeft:20}} name="address-book-o" size={30} color="#055be2" />
                  </TouchableOpacity>
          
                  <View style={{width:'80%',paddingLeft:20}}>
                      <Text style={styles.name}>Ehab Hafez </Text>
                      <Text style={styles.email}>ehabfich94@outlook.sa</Text>
                  </View>
                  <TouchableOpacity>
                  <Entypo  name="dots-three-vertical" size={24} color="#055be2" />
                  </TouchableOpacity>
                 
          </View>
          <View style={styles.contact}>
          <TouchableOpacity>
                  <FontAwesome style={{marginLeft:20}} name="address-book-o" size={30} color="#055be2" />
                  </TouchableOpacity>
          
                  <View style={{width:'80%',paddingLeft:20}}>
                      <Text style={styles.name}>Ehab Hafez </Text>
                      <Text style={styles.email}>ehabfich94@outlook.sa</Text>
                  </View>
                  <TouchableOpacity>
                  <Entypo  name="dots-three-vertical" size={24} color="#055be2" />
                  </TouchableOpacity>
                 
          </View>
          <View style={styles.contact}>
          <TouchableOpacity>
                  <FontAwesome style={{marginLeft:20}} name="address-book-o" size={30} color="#055be2" />
                  </TouchableOpacity>
          
                  <View style={{width:'80%',paddingLeft:20}}>
                      <Text style={styles.name}>Ehab Hafez </Text>
                      <Text style={styles.email}>ehabfich94@outlook.sa</Text>
                  </View>
                  <TouchableOpacity>
                  <Entypo  name="dots-three-vertical" size={24} color="#055be2" />
                  </TouchableOpacity>
                 
          </View>
          <View style={styles.contact}>
          <TouchableOpacity>
                  <FontAwesome style={{marginLeft:20}} name="address-book-o" size={30} color="#055be2" />
                  </TouchableOpacity>
          
                  <View style={{width:'80%',paddingLeft:20}}>
                      <Text style={styles.name}>Ehab Hafez </Text>
                      <Text style={styles.email}>ehabfich94@outlook.sa</Text>
                  </View>
                  <TouchableOpacity>
                  <Entypo  name="dots-three-vertical" size={24} color="#055be2" />
                  </TouchableOpacity>
                 
          </View>
          <View style={styles.contact}>
          <TouchableOpacity>
                  <FontAwesome style={{marginLeft:20}} name="address-book-o" size={30} color="#055be2" />
                  </TouchableOpacity>
          
                  <View style={{width:'80%',paddingLeft:20}}>
                      <Text style={styles.name}>Ehab Hafez </Text>
                      <Text style={styles.email}>ehabfich94@outlook.sa</Text>
                  </View>
                  <TouchableOpacity>
                  <Entypo  name="dots-three-vertical" size={24} color="#055be2" />
                  </TouchableOpacity>
                 
          </View>
          <View style={styles.contact}>
          <TouchableOpacity>
                  <FontAwesome style={{marginLeft:20}} name="address-book-o" size={30} color="#055be2" />
                  </TouchableOpacity>
          
                  <View style={{width:'80%',paddingLeft:20}}>
                      <Text style={styles.name}>Ehab Hafez </Text>
                      <Text style={styles.email}>ehabfich94@outlook.sa</Text>
                  </View>
                  <TouchableOpacity>
                  <Entypo  name="dots-three-vertical" size={24} color="#055be2" />
                  </TouchableOpacity>
                 
          </View>
          
         
          </View>
  
          
          <TouchableOpacity style={styles.addNew}>
          <Ionicons name="add-circle" size={80} color="#045ce2" />
          </TouchableOpacity>
         
        
        </View>
      );
}

export default PhoneBook


const styles = StyleSheet.create({
    container: {height: '100%', backgroundColor: '#fafbfd'},
   
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
    //   fontFamily:'bold',
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
      justifyContent:'center'
  },
  name:{
      fontSize:16,
    //   fontFamily:'bold',
      color:'#01084e'
  },
  email:{
      color:'#01084e'
  },
  contact:{
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'flex-end',
      paddingTop:10,
  },
  contacts:{
      paddingLeft:25,
      paddingRight:25,
      height:'67%'
  },
  addNew:{
      alignItems:'flex-end',
      paddingRight:20,   
  }
    
  });
