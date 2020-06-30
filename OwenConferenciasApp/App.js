import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import UpcomingEvents from './screens/UpcomingEvents';
import CompletedEvents from './screens/CompletedEvents';
import NewEvents from './screens/NewEvents';
import ProfileUser from './screens/ProfileUserLayout';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Upcoming" component={UpcomingEvents} />
        <Tab.Screen name="Completed" component={CompletedEvents} />
        <Tab.Screen name="Add event" component={NewEvents} />
        <Tab.Screen name="Your profile" component={ProfileUser} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
