import {POSTS, USERS, COMMENT} from '../constants/types';

export const putPosts = (posts: POSTS) => {
  return {type: 'PUT_POSTS', payload: posts};
};

export const putUsers = (users: USERS) => {
  return {type: 'PUT_USERS', payload: users};
};

export const putComments = (comments: COMMENT) => {
  return {type: 'PUT_COMMENTS', payload: comments};
};
