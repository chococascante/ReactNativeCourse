import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import MainContainer from './src/components/MainContainer';

import styled, {css} from '@emotion/native';
import {ThemeProvider} from 'emotion-theming';
import {Provider} from 'react-redux';

// import createReduxStore from './src/store';
import {createStore} from 'redux';
import PostsReducer from './src/store/reducers/Posts';

const theme = {
  blue: '#0000ff',
  background: '#ccc',
};

const store = createStore(PostsReducer);

const App: () => React$Node = () => {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <SafeAreaView style={styles.container}>
          <MainContainer />
        </SafeAreaView>
      </Provider>
    </ThemeProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default App;
