import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Text, Button, SafeAreaView} from 'react-native';
import Card from './src/components/Card';

const students = [
  {name: 'Adolfo', lastName: 'Valverde'},
  {name: 'Allan', lastName: 'Cordero'},
  {name: 'Kenny', lastName: 'Cardenas'},
  {name: 'Laura', lastName: 'Garcia'},
];

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
    <SafeAreaView style={styles.container}>
      {students.map((student) => (
        <Card
          key={`${student.name}`}
          studentName={student.name}
          lastName={student.lastName}
        />
      ))}
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    display: 'flex',
    padding: 15,
  },
});
