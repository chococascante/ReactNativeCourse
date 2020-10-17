import React from 'react';
import {View, Text, Button, ActivityIndicator} from 'react-native';
import styles from './PostDetails.styles';

import {setCurrentPostRedux} from '../../store/actions/Posts';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';

import Title from '../Title';

const PostDetails = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const handleButtonClick = () => {
    dispatch(setCurrentPostRedux(null));
    navigation.navigate('Card');
  };

  const currentPostRedux = useSelector((state) => state.posts.currentPost);

  return (
    <View style={styles.container}>
      {currentPostRedux ? (
        <>
          <Button title="Back" onPress={handleButtonClick} />
          <Title>{currentPostRedux.title}</Title>
          <Text style={styles.body}>{currentPostRedux.body}</Text>
        </>
      ) : (
        <ActivityIndicator />
      )}
    </View>
  );
};

export default PostDetails;
