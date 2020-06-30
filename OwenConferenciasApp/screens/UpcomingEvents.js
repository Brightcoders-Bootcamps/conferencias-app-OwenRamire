import React from 'react';
import {View, Text, Alert} from 'react-native';

export default function Upcoming() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{fontSize: 25}}>No upcoming events 👀</Text>
    </View>
  );
}
