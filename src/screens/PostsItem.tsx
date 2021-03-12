import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  View,
  Text,
} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RouteProp} from '@react-navigation/native';
import {RootParamList} from '../constants/types';
import {getUsers, getComments} from '../store/api';
import {putUsers, putComments} from '../store/actions';
import {
  UsersReducerType,
  USER,
  PostsReducerType,
  POST,
  CommentsReducerType,
  COMMENT,
} from '../constants/types';
import {Loader} from '../components/Loader';

export const PostsItem = ({navigation, route}: PostsItemTypeProps) => {
  const dispatch = useDispatch();
  const {id, userId} = route.params;

  const users = useSelector((state: UsersReducerType) => state.users);
  const posts = useSelector((state: PostsReducerType) => state.posts);
  const comments = useSelector((state: CommentsReducerType) => state.comments);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const users = await getUsers();
    dispatch(putUsers(users));
    const comments = await getComments();
    dispatch(putComments(comments));
  };

  const selectPost = () => {
    return posts.find((post: POST) => post.id === id);
  };

  const selectUser = () => {
    return users.find((user: USER) => user.id === userId);
  };

  const selectComment = () => {
    return comments.find((comment: COMMENT) => comment.postId === id);
  };

  if (!users) {
    return <Loader />;
  }

  return (
    <ScrollView>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.back}>
        <Text>Go back</Text>
      </TouchableOpacity>
      <View style={styles.wrapperInfo}>
        <Text style={styles.title}>Title:</Text>
        <Text>{selectPost()?.title}</Text>
        <Text style={styles.title}>Body:</Text>
        <Text>{selectPost()?.body}</Text>
        <Text style={styles.title}>Username:</Text>
        <Text>{selectUser()?.username}</Text>
        <Text style={styles.title}>Comment:</Text>
        <Text>{selectComment()?.body}</Text>
        <Text>{selectComment()?.name}</Text>
      </View>
    </ScrollView>
  );
};

type PostsItemTypeProps = {
  navigation: StackNavigationProp<RootParamList, 'PostsItem'>;
  route: RouteProp<RootParamList, 'PostsItem'>;
};

const styles = StyleSheet.create({
  wrapperInfo: {
    backgroundColor: 'pink',
    padding: 10,
    margin: 1,
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 8,
  },
  back: {
    backgroundColor: 'blue',
    alignItems: 'center',
    padding: 5,
    margin: 10,
  },
  title: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
