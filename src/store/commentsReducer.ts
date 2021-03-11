import {COMMENTS} from '../constants/types';

const initialState: COMMENTS = [];

export const commentsReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case 'PUT_COMMENTS':
      return action.payload;
    default:
      return state;
  }
};
