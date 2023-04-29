import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/login';
import CadastroScreen from "./screens/Cadastro";
import ListaScreen from "./screens/ListaContatos";
import CadastroContatosScreen from './screens/CadastroContatos'
import AlteracaoCadastroScreen from './screens/AlteracaoCadastro'



const Stack = createNativeStackNavigator();

function App() {
return (
<NavigationContainer>
<Stack.Navigator>
<Stack.Screen name="Login" component={LoginScreen}  options= {{headerShown: false }} />
<Stack.Screen name="Cadastro" component={CadastroScreen} options= {{headerShown: false }}/>
<Stack.Screen name="Lista" component={ListaScreen} options= {{headerShown: false }}/>
<Stack.Screen name="CadastroContatos" component={CadastroContatosScreen} options= {{headerShown: false }}/>
<Stack.Screen name="AlteracaoCadastro" component={AlteracaoCadastroScreen} options= {{headerShown: false }}/>
</Stack.Navigator>
</NavigationContainer>
);
}
export default App;