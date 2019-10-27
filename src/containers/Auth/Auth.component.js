import React, {useEffect} from 'react';
import {View, Text} from 'react-native';

export const Auth: () => React$Node = props => {
  useEffect(() => {
    props.changeEmail();
  }, [props]);
  return (
    <View>
      <Text>Text</Text>
    </View>
  );
};
