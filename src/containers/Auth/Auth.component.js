import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import I18n from '../../translations/i18n';

export const Auth: () => React$Node = props => {
  useEffect(() => {
    props.changeEmail();
  }, [props]);
  return (
    <View>
      <Text>{I18n.t('hello')}</Text>
    </View>
  );
};
