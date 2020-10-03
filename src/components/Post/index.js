import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const Post = ({post, setCurrentPost}) => {
  return (
    <TouchableOpacity onPress={() => setCurrentPost(post)}>
      <View style={styles.container}>
        <Text style={styles.title}>{post.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ccc',
    display: 'flex',
    alignItems: 'center',
    marginVertical: 10,
    padding: 5,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.39,
    shadowRadius: 8.3,
    elevation: 13,
    width: '80%',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  },
  body: {
    color: '#333',
    fontSize: 18,
  },
});

export default Post;
