import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function cardEvent(props) {
  return (
    <View style={styles.container}>
      <View style={styles.cardContainer}>
        <Text style={[styles.txtInfo, styles.txtDate]}>{props.data.date}</Text>
        <Text style={[styles.txtInfo, styles.txtEvent]}>{props.data.nameEvent}</Text>
        <Text style={[styles.txtInfo, styles.txtHour]}>{props.data.hour}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: 380,
    height: 100,
    marginVertical: 10,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
  },
  txtDate: {
    fontSize: 25,
    textAlign: 'left',
    paddingLeft: 10,
  },
  txtEvent: {
    fontSize: 20,
    paddingLeft: 10,
    textAlign: 'center',
  },
  txtHour: {
    fontSize: 15,
    paddingLeft: 10,
    textAlign: 'right',
    paddingRight: 10,
  },
});

//style={{display: 'flex', justifyContent: 'center', alignItems: 'center', borderWidth: 2, borderStyle: 'solid', borderColor: 'green'}}
