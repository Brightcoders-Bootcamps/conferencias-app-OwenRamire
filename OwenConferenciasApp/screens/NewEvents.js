import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  TextInput,
  Alert,
} from 'react-native';
import {Colors} from '../themes/Themes';

export default class NewEvent extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.mainContainer}>
        <View style={styles.cardEvent}>
          <Text style={styles.txtTitle}>New conference</Text>
          <View style={styles.formNewEvent}>
            <TextInput
              style={styles.inputEvents}
              placeholder="Name of the conference:"
            />
            <TextInput style={styles.inputEvents} placeholder="Topic:" />
            <View style={styles.containerBtnsDayHour}>
              <TouchableOpacity style={styles.btnsDayHour}>
                <Text style={styles.txtButtons}>Select the day</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.btnsDayHour}>
                <Text style={styles.txtButtons}>Select the hour</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              style={styles.btnAddConf}
              onPress={() =>
                Alert.alert('Are you sure ta add this conference')
              }>
              <Text style={styles.txtButtons}>Add conference</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: Colors.lightGray,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtTitle: {
    fontSize: 30,
    textAlign: 'center',
    marginTop: 15,
  },
  cardEvent: {
    width: 330,
    flex: 0.85,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.white,
    borderRadius: 20,
  },
  formNewEvent: {
    width: 260,
    marginVertical: 20,
  },
  inputEvents: {
    width: '90%',
    height: 50,
    fontSize: 15,
    marginVertical: 10,
    marginLeft: 10,
    borderBottomWidth: 2,
    borderBottomColor: Colors.lightGray,
    borderStyle: 'solid',
  },
  containerBtnsDayHour: {
    height: 150,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
  },
  btnsDayHour: {
    marginVertical: 10,
    width: 200,
    height: 40,
    borderRadius: 50,
    backgroundColor: Colors.blueBtnsProfile,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnAddConf: {
    width: 180,
    height: 40,
    marginVertical: 20,
    backgroundColor: Colors.greenSuccess,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
  },
  txtButtons: {
    color: Colors.white,
    fontSize: 20,
  },
});
