import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import AvatarImage from '../../assets/avatar.png';

const Card = ({studentName = '', lastName = ''}) => {
  return (
    <View style={styles.container}>
      {/* <Image
        style={styles.image}
        source={{
          uri:
            'https://images.vexels.com/media/users/3/129733/isolated/preview/a558682b158debb6d6f49d07d854f99f-silueta-de-avatar-masculino-casual-by-vexels.png',
        }}
      /> */}
      <Image style={styles.image} source={AvatarImage} />
      <View style={styles.row}>
        <Text style={styles.name}>{studentName}</Text>
        <Text style={styles.lastName}>{lastName}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ccc',
    width: 200,
    marginVertical: 15,
    paddingVertical: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.39,
    shadowRadius: 8.3,
    elevation: 13,

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  name: {
    color: 'blue',
    fontSize: 30,
    fontWeight: 'bold',
  },
  lastName: {
    color: 'green',
    fontSize: 25,
    fontStyle: 'italic',
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  image: {
    height: 50,
    width: 50,
  },
});

export default Card;
