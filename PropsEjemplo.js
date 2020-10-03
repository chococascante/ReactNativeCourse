import React from 'react';
import {Text, View} from 'react-native';

export default class PropsEjemplo extends React.Component {
  render() {
    return (
      <View>
        <Text>{this.props.name}</Text>
        <Text> {this.props.contador}</Text>
      </View>
    );
  }
}

/*
    Pasos para crear el componente:
    1. constructor 
    2. render 
    3. componentDidMount 

    !!!Se queda escuchando cambios en el estado

    Pasos para actualizar:
    
    1. shouldComponentUpdate
    2. render
    3. componentDidUpdate
*/
