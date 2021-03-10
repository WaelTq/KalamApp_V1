import React from 'react';
import {Text, View, Image, TouchableOpacity, TextInput} from 'react-native';

const Splash = ({navigation}) => {
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
          height: '70%',
          position: 'relative',
          top: 0,
          left: 1,
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
        }}
      >
        <View>
          <Text
            style={{
              fontSize: 20,
              fontWeight: '900',
              // fontFamily: 'SemiBold',
              alignSelf: 'center',
              marginTop: '15%',
              color: '#000',
            }}
          >
            Welcome at KalamTranslate
          </Text>
          <Text
            style={{
              fontSize: 12,
              // fontWeight: '900',
              // fontFamily: 'SemiBold',
              alignSelf: 'center',
              marginTop: '4%',
              color: '#979797',
            }}
          >
            Please Sing In to start Meeting
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              marginBottom: 20,
              marginTop: 20,
              height: 50,
            }}
          >
      
            <TouchableOpacity
              onPress={() => navigation.navigate('Register')}
              style={{
                marginLeft: 5,
                marginRight: '5%',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 10,
                width: 140,

                backgroundColor: '#045ce2',
              }}
            >
              <Text
                style={{
                  color: '#e1faff',
                  fontFamily: 'SemiBold',
                }}
              >
                Register
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => navigation.navigate('Login')}
              style={{
                marginRight: 5,
                marginLeft: "5%",
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#f2ac19',
                borderRadius: 10,
                width: 140,
              }}
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
          </View>
        </View>

        <Text
          style={{
            fontSize: 12,
            fontWeight: '900',
            // fontFamily: 'SemiBold',
            alignSelf: 'center',
            marginTop: '5%',
            color: '#979797',
          }}
        >
          Copyrigths © 2021 KalamTranslate
        </Text>
      </View>
    </View>
  );
  
}

export default Splash;