import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import UpcomingEvent from '../screens/UpcomingEvents';

export default class CardEvent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [
        {
          date: '2020-07-06',
          nameEvent: 'The Spoils of war',
          hour: '09:00 - 10:00',
        },
        {
          date: '2020-07-07',
          nameEvent: 'The broken man',
          hour: '09:00 - 10:00',
        },
        {
          date: '2020-07-08',
          nameEvent: 'Back to winterfell',
          hour: '09:00 - 10:00',
        },
      ],
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.events}
          renderItem={({item}) => <UpcomingEvent data={item} />}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    display: 'flex',
    // justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    width: '95%',
    height: 100,
    backgroundColor: '#FD6175',
  },
});
