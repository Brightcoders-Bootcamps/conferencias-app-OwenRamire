import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {MainNavigation} from './navigationScreens/NavigationForm';

export default function App() {
  return (
    <NavigationContainer>
      <MainNavigation />
    </NavigationContainer>
  );
}
