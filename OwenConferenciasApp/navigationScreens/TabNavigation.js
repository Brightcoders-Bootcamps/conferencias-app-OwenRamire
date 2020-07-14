import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import UpcomingEvents from '../screens/UpcomingEvents';
import CompletedEvents from '../screens/CompletedEvents';
import NewEvents from '../screens/NewEvents';
import ProfileUser from '../screens/ProfileUserLayout';

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Upcoming" component={UpcomingEvents} />
      <Tab.Screen name="Completed" component={CompletedEvents} />
      <Tab.Screen name="Add event" component={NewEvents} />
      <Tab.Screen name="Your profile" component={ProfileUser} />
    </Tab.Navigator>
  );
}
