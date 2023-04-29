import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Button, Header, Icon } from 'react-native-elements';
import axios from 'axios';

function CadastroScreen({ navigation,}) {
  
  const [getNome, setNome] = useState('');
  const [getEmail, setEmail] = useState('');
  
  async function cadastrar() {
            
      await axios.post('https://644c548917e2663b9d049ecb.mockapi.io/cliente/', {
          nome: getNome,
          telefone: getEmail,
        })
        .then(function (response) {
          alert("Contato Cadastro com sucesso!")
          navigation.navigate('Lista');
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });     
          
  }
  
  return (
    <View >
      <Header
          leftComponent={ <Button
            icon={
              <Icon
                name="arrow-left"
                size={25}
                color="white"
              />
            }
            title=""
            onPress={()=>navigation.navigate('Lista')}            
          /> }
          centerComponent={{ text: 'Usuário', style: { color: '#fff', fontSize: 25 } }}
      />
      <View style={styles2.container}>    
      
      <TextInput
        style={styles2.input}
        placeholder="Nome"
        value={getNome}
        onChangeText={setNome}
      />
    
      <TextInput
        style={styles2.input}
        placeholder="Email"
        keyboardType="email-address"
        value={getEmail}
        onChangeText={setEmail}
      />
    
      <TouchableOpacity style={styles2.button} onPress={cadastrar}>
        <Text style={styles2.buttonText}>Salvar</Text>
      </TouchableOpacity>
      </View>
    </View>
  );
}

const styles2 = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    paddingTop: 40
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 24,
    paddingTop: 40
  },
  input: {
    width: '80%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    margin: 10,
    borderRadius: 14,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default CadastroScreen;

