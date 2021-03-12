import React, {useEffect, FC} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
} from 'react-native';
import {RootParamList, PostsReducerType} from '../constants/types';
import {StackNavigationProp} from '@react-navigation/stack';
import {POSTS_ITEM} from '../constants/route';
import {putPosts} from '../store/actions';
import {Loader} from '../components/Loader';
import {getPosts} from '../store/api';

export const PostsList: FC<PostsListTypeProps> = ({navigation}) => {
  const dispatch = useDispatch();
  const posts = useSelector((state: PostsReducerType) => state.posts);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    const posts = await getPosts();
    dispatch(putPosts(posts));
  };

  if (!posts) {
    return <Loader />;
  }

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={posts}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({item}) => (
          <TouchableOpacity
            style={styles.btn}
            onPress={() => {
              navigation.navigate(POSTS_ITEM, {
                id: item.id,
                userId: item.userId,
              });
            }}>
            <Text numberOfLines={2}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
};

type PostsListTypeProps = {
  navigation: StackNavigationProp<RootParamList, 'PostsList'>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  btn: {
    backgroundColor: 'yellow',
    padding: 10,
    margin: 1,
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 8,
  },
});
