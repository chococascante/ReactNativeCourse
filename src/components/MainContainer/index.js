import React, {useEffect, useState} from 'react';
import {View, ActivityIndicator, StyleSheet} from 'react-native';
import Post from '../Post';
import axios from 'axios';
import PostDetails from '../PostDetails';

const MainContainer = () => {
  const [posts, setPosts] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [currentPost, setCurrentPost] = useState(null);

  console.log(currentPost);

  const loadContent = async () => {
    try {
      const data = await axios.get(
        'https://jsonplaceholder.typicode.com/posts',
      );

      setPosts(data.data);
      setLoaded(true);
    } catch (e) {
      console.log(e);
    }
  };

  // Simulando el componentDidMount
  useEffect(() => {
    async function callLoadContent() {
      await loadContent();
    }

    callLoadContent();
  }, []);

  return (
    <View style={styles.container}>
      {loaded ? (
        <>
          {currentPost ? (
            <PostDetails post={currentPost} setCurrentPost={setCurrentPost} />
          ) : (
            <>
              {posts.map((post) => (
                <Post
                  setCurrentPost={setCurrentPost}
                  key={post.title}
                  post={post}
                />
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
