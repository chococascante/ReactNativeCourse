import {StyleSheet} from 'react-native';

import colors from '../../constants';

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
    color: colors.blue,
  },
  body: {
    color: '#333',
    fontSize: 18,
  },
});

export default styles;
