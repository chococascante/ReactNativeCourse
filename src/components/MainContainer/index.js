import React, {useEffect} from 'react';
import {View, ActivityIndicator, StyleSheet} from 'react-native';
import Post from '../Post';
import PostDetails from '../PostDetails';
import {useSelector, useDispatch} from 'react-redux';
import {getPosts} from '../../store/actions/Posts';

const MainContainer = () => {
  const dispatch = useDispatch();

  const reduxPosts = useSelector((state) => state.posts.posts);
  const reduxLoaded = useSelector((state) => state.posts.loaded);
  const currentPostRedux = useSelector((state) => state.posts.currentPost);

  // Simulando el componentDidMount
  useEffect(() => {
    dispatch(getPosts());
  }, [getPosts, dispatch]);

  return (
    <View style={styles.container}>
      {reduxLoaded ? (
        <>
          {currentPostRedux ? (
            <PostDetails />
          ) : (
            <>
              {reduxPosts.map((post) => (
                <Post key={post.title} post={post} />
              ))}
            </>
          )}
        </>
      ) : (
        <ActivityIndicator />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
});

export default MainContainer;
