import styled, {css} from '@emotion/native';
import {Text} from 'react-native';
import {StyleSheet} from 'react-native';

const Title = styled.Text`
  font-size: 24;
  font-weight: bold;
  color: ${(props) => props.theme.blue};
`;

const CustomTitle = (props) => {
  return <Text style={styles.text}>{props.children}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'red',
  },
});

export default Title;
