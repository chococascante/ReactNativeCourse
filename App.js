import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
import PropsEjemplo from './PropsEjemplo';

const App: () => React$Node = () => {
  const [showPropsHook, setShowPropsHook] = useState(false);
  const [nameHook, setNameHook] = useState('Nombre');
  const [contador, setContador] = useState(0);
  const [texto, setTexto] = useState('Texto');

  const changeName = () => {
    setShowPropsHook(!showPropsHook);
    setNameHook('Hola Props 1');
    setContador(contador + 1);
  };

  const textoLargo = `${texto} ${nameHook}`;

  useEffect(() => {
    setTimeout(() => {
      changeName();
    }, 2000);
  }, []);

  return (
    <View>
      {showPropsHook ? (
        <PropsEjemplo name={textoLargo} contador={contador} />
      ) : (
        <Text>{No hay datos}</Text>
      )}
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  
});
