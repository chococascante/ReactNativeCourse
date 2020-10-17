import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import RootNavigator from './src/navigation';

import {ThemeProvider} from 'emotion-theming';
import {Provider} from 'react-redux';

// import createReduxStore from './src/store';
import configureStore from './src/store/configureStore';

const theme = {
  blue: '#0000ff',
  background: '#ccc',
};

const store = configureStore();

const App: () => React$Node = () => {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <SafeAreaView style={styles.container}>
          <RootNavigator />
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
