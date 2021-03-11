import {createStore, combineReducers} from 'redux';
import {postsReducer} from './postsReducer';
import {usersReducer} from './usersReduser';
import {commentsReducer} from './commentsReducer';

const appReducer = combineReducers({
  posts: postsReducer,
  users: usersReducer,
  comments: commentsReducer,
});

export const store = createStore(appReducer);
