import * as React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import SignIn from './SignInLayout';
import SignUp from './SignUpLayout';
import App from '../../App';

function MainForm({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.mainContainer}>
        <Text style={styles.title}> Welcome to BC👨‍💻 Agenda 📝</Text>
        <View>
          <Image
            source={require('../../assets/logo-bc.png')}
            style={styles.imgLogo}
          />
        </View>
        <View style={styles.containerBtns}>
          <View style={[styles.btnsLogin, styles.btnSignIn]}>
            <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
              <Text style={styles.textBtns}>Sign In</Text>
            </TouchableOpacity>
          </View>
          <View style={[styles.btnsLogin, styles.btnSignUp]}>
            <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
              <Text style={styles.textBtns}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

const Stack = createStackNavigator();

export default function goSignIn() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="MainForm">
        <Stack.Screen
          name="MainForm"
          component={MainForm}
          options={{
            title: '',
            headerStyle: {
              height: 0,
              backgroundColor: '#F0F1F6',
            },
          }}
        />
        <Stack.Screen
          name="SignIn"
          options={{
            title: 'Back',
            headerStyle: {
              backgroundColor: '#F0F1F6',
            },
          }}
          component={SignIn}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{
            title: 'Back',
            headerStyle: {
              backgroundColor: '#F0F1F6',
            },
          }}
        />
        <Stack.Screen
          name="MainMenu"
          component={App}
          options={{
            title: 'Back',
            headerStyle: {
              backgroundColor: '#F0F1F6',
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F0F1F6',
  },
  mainContainer: {
    width: '100%',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  title: {
    width: '70%',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  imgLogo: {
    width: 310,
    height: 200,
  },
  containerBtns: {
    width: '70%',
    height: 130,
    marginTop: 30,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  btnsLogin: {
    width: 200,
    height: 50,
    marginBottom: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4B406B',
    borderRadius: 25,
  },
  btnSignUp: {
    backgroundColor: '#2BD1D1',
  },
  textBtns: {
    width: 150,
    textAlign: 'center',
    color: '#ffff',
    fontSize: 15,
    fontWeight: 'bold',
  },
});
