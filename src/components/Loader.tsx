import React from 'react';
import {StyleSheet, ActivityIndicator, View} from 'react-native';

export const Loader = () => {
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
