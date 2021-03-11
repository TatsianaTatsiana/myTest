import {USERS} from '../constants/types';

const initialState: USERS = [];

export const usersReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case 'PUT_USERS':
      return action.payload;
    default:
      return state;
  }
};
