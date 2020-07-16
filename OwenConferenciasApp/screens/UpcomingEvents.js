import React, {Component} from 'react';
import {FlatList,View, StyleSheet, Text, SafeAreaView} from 'react-native';
import CardEvent from '../components/cardEvent';
import {NewEvents} from '../events/NewEvents';

export default class Upcoming extends Component {
  isEmpy = () => {
    return (
      <View style={styles.containerEmpy}>
        <Text style={{ fontSize: 25, textAlign: 'center' }}>No upcoming events 👀</Text>
      </View>
    );
  };

  render() {
    return (
      <SafeAreaView style={styles.mainContainer}>
        <FlatList
          style={styles.yourEvents}
          data={NewEvents}
          renderItem={({item}) => <CardEvent data={item} />}
          ListEmptyComponent={this.isEmpy}
        />
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  yourEvents: {
    display: 'flex',
  },
  containerEmpy: {
    // height: 80,
    marginTop: 'auto',
    marginBottom: 'auto',
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'grey',
  },
});
