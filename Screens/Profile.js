import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {
  Ionicons,
  Feather,
  FontAwesome,
  SimpleLineIcons,
  FontAwesome5,
} from '@expo/vector-icons';

export default class Profile extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity
            
          >
            <FontAwesome name="pencil-square-o" size={24} color="black" />
          </TouchableOpacity>
          <Text style={[styles.text,{fontSize:15}]}>My Profile</Text>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Home')}>
            
            <Ionicons name="arrow-back" size={24} color="black" />
          </TouchableOpacity>
        </View>

        <View style={styles.info}>
          <Image
          source={require('../assets/image/download.jpg')}
          style={{width: '30%', height: '60%', borderRadius: 10}}
          />
          <Text style={[styles.textName, {marginTop: '2%'}]}>Ehab Hafez </Text>
          <Text style={styles.text}>ehabfich94@outlook.sa</Text>
        </View>

        <View style={{height: '50%', backgroundColor: '#fafbfd'}}>
          <TextInput
            style={[styles.input, {marginTop: '10%'}]}
            placeholder="FName"
            // onChangeText={(text) => this.setState({password: text})}
          />
          <TextInput
            style={styles.input}
            placeholder="LName"
            // onChangeText={(text) => this.setState({password: text})}
          />
          <TextInput
            style={styles.input}
            placeholder="Email"
            // onChangeText={(text) => this.setState({password: text})}
          />
          <TextInput
            style={styles.input}
            secureTextEntry={true}
            placeholder="***********"
            // onChangeText={(text) => this.setState({password: text})}
          />
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
            <FontAwesome5 name="user-circle" size={24} color="#1458c3" />
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
  container: {height: '100%', backgroundColor: '#fafbfd'},
  input: {
    flexDirection: 'row',
    marginHorizontal: '10%',
    borderWidth: 2,
    paddingHorizontal: 10,
    borderColor: '#f4f8fb',
    backgroundColor: '#f4f8fb',
    height: '15%',

    borderRadius: 5,
    marginTop: '3%',
    textAlign: 'left',
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
  },
  textName: {
    fontSize: 24,
    color: '#030947',
    fontFamily: 'SemiBold',
    fontWeight:'800',
  },
  info: {
    alignItems: 'center',
    padding: 2,
    height: '25%',
    backgroundColor: '#f3f7ff',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: '10%',
    padding: "5%",
    marginTop:-15,
    backgroundColor: '#e5ecf4',
    marginHorizontal: '10%',
    paddingHorizontal: 10,
    borderRadius: 25,
  },
  button: {
    padding: '4%',
  },
});