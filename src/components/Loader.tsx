import React, {FC} from 'react';
import {StyleSheet, ActivityIndicator, View} from 'react-native';

export const Loader: FC = () => {
  return (
    <View style={styles.loader}>
      <ActivityIndicator color="red" size="large" />
    </View>
  );
};

const styles = StyleSheet.create({
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
