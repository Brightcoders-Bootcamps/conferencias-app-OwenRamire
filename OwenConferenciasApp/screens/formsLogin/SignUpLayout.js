import React from 'react';
import {
  ScrollView,
  View,
  SafeAreaView,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';
import {Colors} from '../../themes/Themes';

export default function SignUpLayout() {
  return (
    <SafeAreaView>
      <ScrollView style={styles.mainContainer}>
        <View style={styles.containerLogin}>
          <View>
            <Image
              source={require('../../assets/logo-bc.png')}
              style={styles.imgLogo}
            />
          </View>
          <Text style={styles.title}> BC👨‍💻 Agenda 📝</Text>
          <TextInput style={styles.inputUser} placeholder="Name: " />
          <TextInput style={styles.inputUser} placeholder="Email: " />
          <TextInput style={styles.inputUser} placeholder="Password: " />
          <View style={[styles.inputUser, styles.containerBtnImgUser]}>
            <TouchableOpacity
              style={{width: '85%'}}
              onPress={() => {
                Alert.alert('Hi');
              }}>
              <Text style={{textAlign: 'center', fontSize: 15}}>
                Do you want put an image?
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.containerBtn}>
            <View style={styles.btnSignUp}>
              <TouchableOpacity
                style={{width: '85%'}}
                onPress={() => {
                  Alert.alert('Hi');
                }}>
                <Text style={styles.textBtnSignUp}>Create account</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    display: 'flex',
    backgroundColor: Colors.lightGray,
  },
  containerLogin: {
    marginVertical: 20,
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
    marginTop: 10,
  },
  inputUser: {
    width: 280,
    height: 50,
    marginBottom: 12,
    paddingLeft: 20,
    fontWeight: 'bold',
    backgroundColor: Colors.backgroundGray,
    borderRadius: 25,
  },
  containerBtnImgUser: {
    paddingLeft: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerBtn: {
    width: '70%',
    marginBottom: 10,
    flex: 0.2,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnSignUp: {
    width: 200,
    height: 50,
    marginTop: 15,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.lightBlue,
    borderRadius: 25,
  },
  textBtnSignUp: {
    color: Colors.white,
    textAlign: 'center',
    fontSize: 20,
  },
});
