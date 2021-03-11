import {POSTS} from '../constants/types';

const initialState: POSTS = [];

export const postsReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case 'PUT_POSTS':
      return action.payload;
    default:
      return state;
  }
};
