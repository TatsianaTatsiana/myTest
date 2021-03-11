/**
 * @format
 */

import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import {PostsList} from '../src/screens/PostsList';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
jest.useFakeTimers();

describe('screen test', () => {
  const initialState = {output: 10};
  const mockStore = configureStore();
  let store;

  it('renders correctly', () => {
    store = mockStore(initialState);
    const tree = renderer
      .create(
        <Provider store={store}>
          <PostsList />
        </Provider>,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
