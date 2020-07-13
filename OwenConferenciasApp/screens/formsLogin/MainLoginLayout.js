import * as React from 'react';
import {SafeAreaView, View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import SignIn from './SignInLayout';
import SignUp from './SignUpLayout';
import App from '../../App';
import {Colors} from '../../themes/Themes';

function MainForm({navigation}) {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.container}>
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
    </SafeAreaView>
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
              backgroundColor: Colors.lightGray,
            },
          }}
        />
        <Stack.Screen
          name="SignIn"
          options={{
            title: 'Back',
            headerStyle: {
              backgroundColor: Colors.lightGray,
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
              backgroundColor: Colors.lightGray,
            },
          }}
        />
        <Stack.Screen
          name="MainMenu"
          component={App}
          options={{
            title: 'Back',
            headerStyle: {
              backgroundColor: Colors.lightGray,
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.lightGray,
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
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
    marginTop: 50,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  btnsLogin: {
    width: 200,
    height: 50,
    marginVertical: 8,
    marginHorizontal: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.purple,
    borderRadius: 25,
  },
  btnSignUp: {
    backgroundColor: Colors.lightBlue,
  },
  textBtns: {
    width: 150,
    textAlign: 'center',
    color: Colors.white,
    fontSize: 15,
    fontWeight: 'bold',
  },
});
