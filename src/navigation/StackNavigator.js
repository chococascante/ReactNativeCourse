import React from 'react';
import {SafeAreaView, Text, StyleSheet, Button, View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import MainContainer from '../components/MainContainer';
import PostDetails from '../components/PostDetails';
import {useNavigation} from '@react-navigation/native';

const Stack = createStackNavigator();

const styles = StyleSheet.create({
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#ffa500',
    width: '100%',
    height: 50,
    paddingHorizontal: 5,
  },
  text: {
    fontSize: 28,
    color: '#fff',
  },
  button: {
    width: 50,
  },
});

const Header = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.header}>
      <Button
        style={styles.button}
        onPress={() => navigation.goBack()}
        title="Back"
      />
      <Text style={styles.text}>Header</Text>
      <View style={styles.button} />
    </SafeAreaView>
  );
};

export default function PostNavigator() {
  return (
    <Stack.Navigator
      headerMode="none"
      screenOptions={{header: Header}}
      initialRouteName="MainContainer">
      <Stack.Screen name="MainContainer" component={MainContainer} />
      <Stack.Screen name="CurrentPost" component={PostDetails} />
    </Stack.Navigator>
  );
}
