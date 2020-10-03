import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

export default class PropsEjemplo extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text>{this.props.name}</Text>
          <Text> {this.props.contador}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
  },
});

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
