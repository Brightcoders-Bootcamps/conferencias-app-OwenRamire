import React from 'react';
import {View, Text, Alert} from 'react-native';

export default function Upcoming(props) {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      {this.props.data}
      {/* <View>{this.props.data}</View> */}
      {/* <Text style={{fontSize: 25}}>No upcoming events 👀</Text> */}
    </View>
  );
}
