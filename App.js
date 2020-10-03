import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import MainContainer from './src/components/MainContainer';

import styled, {css} from '@emotion/native';

import {ThemeProvider} from 'emotion-theming';

const theme = {
  blue: '#0000ff',
  background: '#ccc',
};

const App: () => React$Node = () => {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView style={styles.container}>
        <MainContainer />
      </SafeAreaView>
    </ThemeProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default App;
