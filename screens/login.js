import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Avatar, Button, Input } from 'react-native-elements';

import { firebaseConfig } from './config_firebase.js';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function realizarLogin() {
    if((email, password) !== ''){
      const auth = getAuth();
      signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        alert("Usuário logado: "+ user.email);
        navigation.navigate('Lista');
      })
      .catch((error) => {
        alert("Login ou Senha inválidos!");
      });

    }else{
      alert('Favor inserir Email e Senha!')
    }
    
  }

  return (
    <View style={styles.container}>
      <Avatar
        rounded
        size="xlarge"
        source={{ uri: 'https://i.pravatar.cc/150' }}
        containerStyle={styles.avatar}
      />
      <Input
        placeholder="Email"
        onChangeText={(text) => setEmail(text)}
        value={email}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <Input
        placeholder="Senha"
        onChangeText={(text) => setPassword(text)}
        value={password}
        secureTextEntry
      />
      <View style={styles.buttonsContainer}>
        <Button
          title="CADASTRAR"
          buttonStyle={styles.button}
          onPress={()=>navigation.navigate('Cadastro')}
        />
        <Button
          title="ENTRAR"
          buttonStyle={styles.button}
          onPress={realizarLogin}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  avatar: {
    marginBottom: 50,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  button: {
    marginHorizontal: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
});

export default LoginScreen;


