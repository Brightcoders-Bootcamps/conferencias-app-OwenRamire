import React, {Component} from 'react';
import {SafeAreaView, FlatList, StyleSheet, Text} from 'react-native';
import CardEvent from '../components/cardEvent';
import {OldEvents} from '../events/OldEvents';

export default class Completed extends Component {
  isEmpy = () => {
    return <Text style={{ fontSize: 25, textAlign: 'center' }}>Completed ✅</Text>;
  };

  render() {
    return (
      <SafeAreaView style={styles.mainContainer}>
        <FlatList
          style={styles.yourEvents}
          data={OldEvents}
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
