export type RootParamList = {
  PostsList: undefined;
  PostsItem: {id: string | number; userId: string | number};
};

export type POST = {
  body: string;
  id: number | string;
  userId: number | string;
  title: string;
};

export type POSTS = Array<POST>;

export type PostsReducerType = {
  posts: POSTS;
};

export type USER = {
  username: string;
  id: number | string;
};

export type USERS = Array<USER>;

export type UsersReducerType = {
  users: USERS;
};

export type COMMENT = {
  body: string;
  name: string;
  id: number | string;
  postId: number | string;
};

export type COMMENTS = Array<COMMENT>;

export type CommentsReducerType = {
  comments: COMMENTS;
};
