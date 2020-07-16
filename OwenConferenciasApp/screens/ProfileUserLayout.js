import React from 'react';
import {
  SafeAreaView,
  View,
  Image,
  TouchableOpacity,
  Text,
  StyleSheet,
} from 'react-native';
import {Colors} from '../themes/Themes';
import {URLs} from '../themes/urls';

export default function ProfileUserLayout() {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.auxContainer}>
        <View style={styles.cardUser}>
          <Image source={{uri: URLs.profileImg}} style={styles.userImg} />
          <View style={styles.userInfo}>
            <Text style={styles.user}>User: owen ramirez</Text>
            <Text style={styles.user}>Email: owenomar@example.com</Text>
          </View>
        </View>
        <View style={styles.containerBtnEditProfile}>
          <TouchableOpacity style={styles.btnEditProfile}>
            <Text style={styles.txtEditProf}>Edit Profile</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: Colors.backgroundGray,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  auxContainer: {
    backgroundColor: Colors.white,
    borderRadius: 25,
    flex: 0.8,
    paddingHorizontal: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardUser: {
    flex: 0.5,
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
  containerBtnEditProfile: {
    flex: 0.1,
    justifyContent: 'center',
    alignSelf: 'stretch',
  },
  btnEditProfile: {
    backgroundColor: Colors.blueBtnsProfile,
    flex: 1,
    justifyContent: 'center',
    alignSelf: 'center',
    paddingHorizontal: 50,
    borderRadius: 25,
  },
  txtEditProf: {
    width: 80,
    color: Colors.white,
    fontWeight: 'bold',
  },
  btnEditProfile: {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtEditProf: {
    width: 80,
    color: 'white',
    fontWeight: 'bold',
  },
});
