import React from 'react';
import {SafeAreaView, Text, StyleSheet} from 'react-native';

export default function Upcoming() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={{fontSize: 25}}>No upcoming events 👀</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
