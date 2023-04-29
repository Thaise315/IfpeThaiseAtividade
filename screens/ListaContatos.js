import React, { useState ,useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import axios from 'axios';
import { ListItem, Avatar, Header, Icon } from 'react-native-elements';
import { useIsFocused } from "@react-navigation/native";



const ListaScreen = ({navigation}) => {
  
  const [list, setList] = useState([]);
  const refresh = useIsFocused ();

  useEffect(() => {

    async function consultarDados() {

      await axios.get('https://644c548917e2663b9d049ecb.mockapi.io/cliente/')
        .then(function (response) {
        setList(response.data);
          console.log(response.data)
        }).catch(function (error) {
          console.log(error);

        });

    }
        consultarDados();
  }, [refresh])


  return (
    <View>
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
          onPress={()=>navigation.navigate('Login')}            
        /> }
        rightComponent={<Button
          title="+"
          onPress={() => navigation.navigate('CadastroContatos')}
        />}
        centerComponent={{ text: 'Lista', style: { color: '#fff', fontSize: 25 } }}
      />
      {
    list.map((l, i) => (
      <ListItem key={i} bottomDivider onPress={() => navigation.navigate('AlteracaoCadastro',
      {
        
          nome: l.nome,
          email: l.email,
          telefone: l.telefone,
          cpf: l.cpf,
          id: l.id
      
      }

      

      )} >
        <Avatar source={{uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg'}} />
        <ListItem.Content>
          <ListItem.Title>{l.nome}</ListItem.Title>
          <ListItem.Subtitle>{l.email}</ListItem.Subtitle>
          <ListItem.Subtitle>{l.telefone}</ListItem.Subtitle>
          <ListItem.Subtitle>{l.cpf}</ListItem.Subtitle>
        </ListItem.Content>
      </ListItem>
    ))
  }
  {
      list.map((l, i) => (
      <ListItem key={i} bottomDivider onPress={() => navigation.navigate('ExcluirDados',
      {
        
          nome: l.nome,
          email: l.email,
          telefone: l.telefone,
          cpf: l.cpf,
          id: l.id

      }
  )} >
        <Avatar source={{uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg'}} />
        <ListItem.Content>
          <ListItem.Title>{l.nome}</ListItem.Title>
          <ListItem.Subtitle>{l.email}</ListItem.Subtitle>
          <ListItem.Subtitle>{l.telefone}</ListItem.Subtitle>
          <ListItem.Subtitle>{l.cpf}</ListItem.Subtitle>
        </ListItem.Content>
      </ListItem>
    ))
  }


    </View>
  );
};

export default ListaScreen;




