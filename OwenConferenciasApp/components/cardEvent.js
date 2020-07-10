import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function cardEvent(props) {
  return (
    <View style={styles.cardContainer}>
      <Text style={[styles.txtInfo, styles.txtDate]}>{props.data.date}</Text>
      <Text style={[styles.txtInfo, styles.txtEvent]}>{props.data.nameEvent}</Text>
      <Text style={[styles.txtInfo, styles.txtHour]}>{props.data.hour}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    width: '90%',
    height: 100,
    marginTop: 15,
    marginBottom: 10,
    //padding: 15,
    marginRight: 'auto',
    marginLeft: 'auto',
    backgroundColor: '#ffffff',
    borderRadius: 10,
    // flex: 3,
    // justifyContent: 'center',
    // borderWidth: 2,
    // borderStyle: 'solid',
    // borderColor: 'green',
  },
  txtDate: {
    fontSize: 25,
    textAlign: 'left',
    paddingLeft: 10,
  },
  txtEvent: {
    fontSize: 20,
    textAlign: 'center',
  },
  txtHour: {
    fontSize: 15,
    textAlign: 'right',
    paddingRight: 10,
  },
});

//style={{display: 'flex', justifyContent: 'center', alignItems: 'center', borderWidth: 2, borderStyle: 'solid', borderColor: 'green'}}
