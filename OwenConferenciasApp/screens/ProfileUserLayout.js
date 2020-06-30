import React from 'react';
import {View, Image, TouchableOpacity, Text, StyleSheet, Alert} from 'react-native';

export default function ProfileUserLayout() {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.auxContainer}>
        <View style={styles.cardUser}>
          <Image
            source={{uri: 'https://reactnative.dev/img/logo-og.png'}}
            style={styles.userImg}
          />
          <View style={styles.userInfo}>
            <Text style={styles.user}>User: owen ramirez</Text>
            <Text style={styles.user}>Email: owenomar@example.com</Text>
          </View>
        </View>
        <View style={styles.btnEditProfile}>
          <TouchableOpacity>
            <Text style={{color: 'white', fontWeight: 'bold'}}>Edit Profile</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#F0F1F6',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  auxContainer: {
    width: '85%',
    height: '80%',
    backgroundColor: '#ffffff',
    borderRadius: 25,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardUser: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  userImg: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  userInfo: {
    height: 80,
    marginTop: 10,
  },
  user: {
    fontSize: 20,
    marginBottom: 5,
  },
  btnEditProfile: {
    width: '70%',
    height: 50,
    marginTop: 20,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    backgroundColor: 'hsl(204, 86%, 53%)',
  },
});
