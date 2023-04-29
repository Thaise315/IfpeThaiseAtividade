import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Input, Button, Text } from 'react-native-elements';

import { firebaseConfig } from './config_firebase.js';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const SignupScreen = ({navigation}) => {
  // const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function cadastrarUsuario() {
    if ((email, password) !== '') {
      const auth = getAuth();
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          alert("Usuário Cadastrado! ")
          navigation.navigate('Login');
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          alert(errorCode + errorMessage);
        });
    } else {
      alert("Favor inserir Email e Senha!")
    }
  }

  const handleSignup = () => {
    // console.log('Nome:', name);
    console.log('Email:', email);
    console.log('Senha:', password);
  };

  return (
    <View style={styles.container}>
      <Text h3 style={styles.title}>
        CADASTRO
      </Text>
      {/* <Input
        placeholder="Nome"
        onChangeText={(text) => setName(text)}
        value={name}
        autoCapitalize="words"
      /> */}
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
      <View style={styles.buttonContainer}>
        <Button
          title="Salvar"
          buttonStyle={styles.button}
          onPress={cadastrarUsuario}
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
  title: {
    marginBottom: 50,
  },
  buttonContainer: {
    marginTop: 20,
  },
  button: {
    paddingHorizontal: 30,
    borderRadius: 20,
  },
});

export default SignupScreen;