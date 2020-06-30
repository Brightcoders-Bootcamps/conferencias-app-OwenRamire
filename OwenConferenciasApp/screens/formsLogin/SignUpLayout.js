import React from 'react';
import {
  ScrollView,
  View,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';

export default function SignUpLayout() {
  return (
    <ScrollView style={{height: '100%', backgroundColor: '#F0F1F6'}}>
      <View>
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
                <Text
                  style={{color: '#ffff', textAlign: 'center', fontSize: 20}}>
                  Create account
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  containerLogin: {
    height: 700,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 40,
    marginTop: 20,
    marginBottom: 20,
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
    fontWeight: 'bold',
    backgroundColor: ' hsl(0, 0%, 90%)',
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
    backgroundColor: '#2BD1D1',
    borderRadius: 25,
  },
});
