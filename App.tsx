import React from 'react';
import {Provider} from 'react-redux';
import {store} from './src/store/store';
import {RootNavigator} from './src/screens/RootNavigator';

const AppContainer = () => {
  return (
    <Provider store={store}>
      <RootNavigator />
    </Provider>
  );
};

export default AppContainer;
