import React from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  Alert,
  Touchable,
} from 'react-native';

const Login = ({navigation}) => {


  return (
    <View
      style={{
        position: 'relative',
        top: 0,
        left: 0,
        backgroundColor: '#fff',
        height: '100%',
      }}
    >
      <Image
        source={require('../assets/download.jpg')}
        style={{
          width: '100%',
          height: '40%',
          position: 'relative',
          top: 0,
          left: 0,
          borderBottomRightRadius: 100,
          borderTopRightRadius: 5,
          borderTopLeftRadius: 5,
          borderBottomColor: '#ccc',
        }}
      />
      <View
        style={{
          // position: 'absolute',
          top: '-10%',
          // left: 0,
          borderTopLeftRadius: 50,
          borderTopRightRadius: 50,
          backgroundColor: '#fff',
          borderTopColor: '#fbffff',
          bottom: 0,
          height: '60%',
        }}
      >
        <Text
          style={{
            fontSize: 35,
            fontWeight: "800",
            fontFamily: 'SemiBold',
            alignSelf: 'center',
            marginTop: '15%',
            color: '#1459c1',
          }}
        >
          Let’s Login.
        </Text>
        <Text
          style={{
            fontSize: 14,
            fontFamily: 'SemiBold',
            alignSelf: 'center',
            marginTop: '5%',
            color: '#080b2e',
            opacity: 0.9,
          }}
        >
          Already have an account?
          <Text
            style={{color: 'blue'}}
            onPress={() => navigation.navigate('Register')}
          >
            Register
          </Text>
        </Text>

        <TextInput
          style={{
            flexDirection: 'row',
            marginHorizontal: '10%',
            borderWidth: 2,
            paddingHorizontal: 10,
            borderColor: '#f4f8fb',
            backgroundColor: '#f4f8fb',
            height: '12%',
            borderRadius: 5,
            marginTop: '10%',
            textAlign: 'center',
          }}
          placeholder="Email"
          // onChangeText={(text) => this.setState({email: text})}
        />
        <TextInput
          style={{
            flexDirection: 'row',
            marginHorizontal: '10%',
            borderWidth: 2,
            paddingHorizontal: 10,
            borderColor: '#f4f8fb',
            backgroundColor: '#f4f8fb',
            height: '12%',
            borderRadius: 5,
            marginTop: '3%',
            textAlign: 'center',
          }}
          secureTextEntry={true}
          placeholder="Password"
          // onChangeText={(text) => this.setState({password: text})}
        />
        <TouchableOpacity
          style={{
            marginHorizontal: '10%',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 30,
            backgroundColor: '#045ce2',
            paddingVertical: 10,
            borderRadius: 10,
            height: '12%',
          }}
          onPress={() => navigation.navigate('Home')}
          >
          <Text
            style={{
              color: '#e1faff',
              fontFamily: 'SemiBold',
            }}
          >
            Login
          </Text>
        </TouchableOpacity>

      
        <Text
          style={{
            fontSize: 14,
            fontFamily: 'SemiBold',
            alignSelf: 'center',
            marginTop: '7%',
            color: '#080b2e',
            opacity: 0.9,
          }}
        >
          Don‘t Remember ?
          <Text
            style={{color: 'blue'}}
            onPress={() => navigation.navigate('Splash')}
          >
            Forgot Password
          </Text>
        </Text>
      </View>
    </View>
  );
  
  
}

export default Login;