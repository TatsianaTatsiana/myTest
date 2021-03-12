import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {RootParamList} from '../constants/types';
import {PostsList} from '../screens/PostsList';
import {PostsItem} from '../screens/PostsItem';
import {POSTS_LIST, POSTS_ITEM} from '../constants/route';

const Stack = createStackNavigator<RootParamList>();

export const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={POSTS_LIST}
          component={PostsList}
          options={{title: 'All Posts:'}}
        />
        <Stack.Screen
          name={POSTS_ITEM}
          component={PostsItem}
          options={{title: 'Selected Post'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
