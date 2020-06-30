import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  TextInput,
  Alert,
} from 'react-native';

export default class NewEvent extends React.Component {
  render() {
    return (
      <View style={styles.mainContainer}>
        <ScrollView
          style={{
            height: '100%',
          }}>
          <View style={styles.cardEvent}>
            <Text style={{fontSize: 30, marginTop: 20, marginLeft: 15}}>
              New conference
            </Text>
            <View style={styles.formNewEvent}>
              <TextInput
                style={styles.inputEvents}
                placeholder="Name of the conference:"
              />
              <TextInput style={styles.inputEvents} placeholder="Topic:" />
              <TouchableOpacity
                style={styles.btnDayHour}
                onPress={this.showPicker}>
                <Text style={{color: 'white', fontSize: 20}}>Select the day</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.btnDayHour}>
                <Text style={{color: 'white', fontSize: 20}}>Select the hour</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.btnAddConf}
                onPress={() =>
                  Alert.alert('Are you sure ta add this conference')
                }>
                <Text style={{fontSize: 20, color: 'white'}}>Add conference</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    height: '100%',
    backgroundColor: '#F0F1F6',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardEvent: {
    width: '85%',
    height: 500,
    marginTop: 50,
    marginRight: 'auto',
    marginLeft: 'auto',
    backgroundColor: '#ffff',
    borderRadius: 20,
  },
  formNewEvent: {
    marginTop: 30,
    marginLeft: 15,
    marginRight: 15,
  },
  inputEvents: {
    width: '90%',
    height: 50,
    fontSize: 15,
    marginTop: 10,
    marginBottom: 15,
    marginLeft: 10,
    borderBottomWidth: 2,
    borderBottomColor: '#F0F1F6',
    borderStyle: 'solid',
  },
  btnDayHour: {
    width: '80%',
    height: 40,
    marginTop: 15,
    marginRight: 'auto',
    marginLeft: 'auto',
    backgroundColor: 'hsl(204, 86%, 53%)',
    borderRadius: 20,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnAddConf: {
    width: 180,
    height: 40,
    marginTop: 25,
    backgroundColor: 'hsl(141, 71%, 48%)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
  },
});
