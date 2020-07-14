import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import MainForm from '../screens/formsLogin/MainLoginLayout';
import SignIn from '../screens/formsLogin/SignInLayout';
import SignUp from '../screens/formsLogin/SignUpLayout';
import MainMenu from './TabNavigation';
import {Colors} from '../themes/Themes';

const Stack = createStackNavigator();

function MainNavigation() {
  return (
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
        component={MainMenu}
        options={{
          title: '',
          headerStyle: {
            height: 0,
            backgroundColor: Colors.lightGray,
          },
        }}
      />
    </Stack.Navigator>
  );
}

export {MainNavigation};
