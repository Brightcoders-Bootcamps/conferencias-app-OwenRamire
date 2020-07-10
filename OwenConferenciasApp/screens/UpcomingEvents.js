import React, { Component } from 'react';
import {FlatList,View, StyleSheet, Text, SafeAreaView} from 'react-native';
import CardEvent from '../components/cardEvent';

export default class Upcoming extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [
        {
          key: '0',
          date: '2020-07-06',
          nameEvent: 'The Spoils of war ',
          hour: '09:00 - 10:00',
        },
        {
          key: '1',
          date: '2020-07-07',
          nameEvent: 'The broken man',
          hour: '09:00 - 10:00',
        },
        {
          key: '2',
          date: '2020-07-08',
          nameEvent: 'Back to winterfell',
          hour: '09:00 - 10:00',
        },
      ],
    };
  }

  isEmpy = () => {
    return (
      // <Text style={{ width: 280, fontSize: 25,  }}>No upcoming events 👀</Text>

      <View style={styles.containerEmpy}>
        <Text style={{ fontSize: 25, textAlign: 'center' }}>No upcoming events 👀</Text>
      </View>
    );
  };

  render() {
    return (
      <SafeAreaView style={{flex: 1, alignItems: 'stretch', justifyContent: 'center', alignContent: 'center'}}>
        <FlatList
          style={styles.yourEvents}
          data={this.state.events}
          renderItem={({item}) => <CardEvent data={item} />}
          ListEmptyComponent={this.isEmpy}
        />
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  yourEvents: {
    // borderWidth: 2,
    // borderStyle: 'solid',
    // borderColor: 'brown',
    // display: 'flex',
    // justifyContent: 'center',
    // alignItems: 'center',
    // backgroundColor: '#F7F7F8',
  },
  container: {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerEmpy: {
    // height: 500,
    // marginTop: 50,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    // backgroundColor: 'grey',
  },
});
