/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {useEffect} from 'react';
import {View, StyleSheet, Text} from 'react-native';

export const Auth: () => React$Node = props => {
  useEffect(() => {
    props.changeEmail();
  }, []);
  return (
    <View>
      <Text>Text</Text>
    </View>
  );
};
