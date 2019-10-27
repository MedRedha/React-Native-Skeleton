import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {Provider} from 'react-redux';
import store from './src/store';
import {Auth} from './src/containers/Auth';

const App: () => React$Node = () => {
  return (
    <Provider store={store}>
      <SafeAreaView style={styles.Container}>
        <Auth />
      </SafeAreaView>
    </Provider>
  );
};

const styles = StyleSheet.create({
  Container: {
    display: 'flex',
    flex: 1,
  },
});

export default App;
