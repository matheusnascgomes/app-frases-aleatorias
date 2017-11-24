import React from 'react';
import {
  AppRegistry,
  Text,
  Image,
  View,
  Button,
  Alert,
  TouchableOpacity
} from 'react-native';

const Estilos = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  botao: {
    backgroundColor: '#538530',
    paddingVertical: 10,
    paddingHorizontal: 40,
    marginTop: 10
  },
  botaoTexto: {
    color: 'white'
  }
};

const novaFrase = () => {

  var numeroAleatorio = Math.random();
  numeroAleatorio = Math.floor(numeroAleatorio * 5);

  var frase = [
  "Olá",
  "Bom dia",
  "Boa noite",
  "Tudo bem?",
  "Boa tarde"
];

  Alert.alert('Nova Frase',frase[numeroAleatorio]);
};

const app2 = () => {

    const {container, botao, botaoTexto} = Estilos;

    return (
      <View style={container}>
        <Image source={require('./imgs/logo.png')} />
        <TouchableOpacity style={botao}
          onPress={novaFrase}>
          <Text style={botaoTexto}>Nova Frase</Text>
        </TouchableOpacity>
      </View>
    );
  }

AppRegistry.registerComponent('app2', () => app2);
