import React from 'react';
import {View, Text, Button} from 'react-native';
import styles from './PostDetails.styles';
import styled, {css} from '@emotion/native';

import {setCurrentPostRedux} from '../../store/actions/Posts';
import {useDispatch} from 'react-redux';

const Title = styled.Text`
  font-size: 24;
  font-weight: bold;
  color: ${(props) => props.theme.blue};
`;

const PostDetails = ({post, setCurrentPost}) => {
  const dispatch = useDispatch();

  const handleButtonClick = () => {
    dispatch(setCurrentPostRedux(null));
    setCurrentPost(null);
  };

  return (
    <View style={styles.container}>
      <Button title="Back" onPress={handleButtonClick} />
      <Title>{post.title}</Title>
      <Text style={styles.body}>{post.body}</Text>
    </View>
  );
};

export default PostDetails;
