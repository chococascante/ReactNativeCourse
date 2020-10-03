import React from 'react';
import {View, Text, Button} from 'react-native';
import styles from './PostDetails.styles';

import styled, {css} from '@emotion/native';

const initialPost = {
  userId: 1,
  id: 5,
  title: 'nesciunt quas odio',
  body:
    'repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque',
};

const Title = styled.Text`
  font-size: 24;
  font-weight: bold;
  color: ${(props) => props.theme.blue};
`;

const PostDetails = ({post, setCurrentPost}) => {
  return (
    <View style={styles.container}>
      <Button title="Back" onPress={() => setCurrentPost(null)} />
      <Title>{post.title}</Title>
      <Text style={styles.body}>{post.body}</Text>
    </View>
  );
};

export default PostDetails;
