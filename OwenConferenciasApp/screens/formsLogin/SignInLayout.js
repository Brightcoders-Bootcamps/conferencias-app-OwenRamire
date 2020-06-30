import React from 'react';
import {
  View,
  TouchableOpacity,
  TextInput,
  Image,
  Text,
  StyleSheet,
  Alert,
} from 'react-native';

export default function SignInLayout() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' ,  backgroundColor:'#F0F1F6'}}>
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
        <View style={styles.containerBtns}>
          <View style={styles.btnSignIn}>
            <TouchableOpacity style={{width:"85%"}} onPress={() => Alert.alert('Hi')}>
              <Text style={{color:"#ffff", textAlign:"center", fontSize:20 }} >Sign In</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  containerLogin: {
    flex: 1,
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
    backgroundColor: 'hsl(0, 0%, 90%)',
    borderRadius: 25,
  },
  containerBtns: {
    width: '70%',
    flex: 0.2,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnSignIn: {
    width: 200,
    height: 50,
    marginTop: 15,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4B406B',
    borderRadius: 25,
  },
});
