import {postsReducer} from '../src/store/postsReducer';
import {usersReducer} from '../src/store/usersReduser';
import {commentsReducer} from '../src/store/commentsReducer';

describe('postsReducer', () => {
  it('should return the initial state of posts', () => {
    expect(postsReducer(undefined, {})).toEqual([]);
  });

  it('should handle POSTS', () => {
    expect(
      postsReducer([], {
        type: 'PUT_POSTS',
        payload: [1, 2, 3],
      }),
    ).toEqual([1, 2, 3]);
  });
});

describe('usersReducer', () => {
  it('should return the initial state of users', () => {
    expect(usersReducer(undefined, {})).toEqual([]);
  });

  it('should handle USERS', () => {
    expect(
      usersReducer([], {
        type: 'PUT_USERS',
        payload: ['user1', 'user2', 'user3'],
      }),
    ).toEqual(['user1', 'user2', 'user3']);
  });
});

describe('commentsReducer', () => {
  it('should return the initial state of comments', () => {
    expect(commentsReducer(undefined, {})).toEqual([]);
  });

  it('should handle COMMENTS', () => {
    expect(
      commentsReducer([], {
        type: 'PUT_COMMENTS',
        payload: ['comment1', 'comment2', 'comment3'],
      }),
    ).toEqual(['comment1', 'comment2', 'comment3']);
  });
});
