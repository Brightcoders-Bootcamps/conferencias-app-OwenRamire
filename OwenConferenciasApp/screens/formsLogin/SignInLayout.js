import React from 'react';
import {
  View,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  Image,
  Text,
  StyleSheet,
  Alert,
} from 'react-native';
import {Colors} from '../../themes/Themes';

export default function SignInLayout() {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.containerLogin}>
        <View>
          <Image source={require('../../assets/logo-bc.png')} style={styles.imgLogo}></Image>
        </View>
        <Text style={styles.title}> BC👨‍💻 Agenda 📝</Text>
        <TextInput
          style={styles.inputUser}
          placeholder="Email: "
          autoCapitalize="none"
        />
        <TextInput style={styles.inputUser} placeholder="Password: " />
        <View style={styles.containerBtn}>
          <View style={styles.btnSignIn}>
            <TouchableOpacity style={{width:"85%"}} onPress={() => Alert.alert('Hi')}>
              <Text style={styles.textBtnSignIn}>Sign In</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.lightGray,
  },
  containerLogin: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 40,
    marginVertical: 20,
  },
  imgLogo: {
    width: 310,
    height: 200,
  },
  inputUser: {
    width: 280,
    height: 50,
    marginBottom: 10,
    paddingLeft: 20,
    backgroundColor: Colors.backgroundGray,
    borderRadius: 25,
  },
  containerBtn: {
    marginTop: 15,
    flex: 0.4,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnSignIn: {
    width: 200,
    height: 50,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.purple,
    borderRadius: 25,
  },
  textBtnSignIn: {
    color: Colors.white,
    textAlign: 'center',
    fontSize: 20,
  },
});
