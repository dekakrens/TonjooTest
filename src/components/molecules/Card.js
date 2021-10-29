import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {colors} from '../../utils';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Card = ({avatar, firstName, lastName, email, gender, status}) => {
  return (
    <View style={styles.row}>
      {/* Avatar */}
      <Image source={avatar} style={styles.image} />

      {/* Content */}
      <View>
        <Text style={styles.text}>
          {firstName} {lastName}
        </Text>
        <Text style={styles.text}>{gender}</Text>
        <Text style={styles.text}>{email}</Text>
      </View>

      {/* Icon */}
      <TouchableOpacity style={styles.iconPosition}>
        <Icon
          name={status == 'local' ? 'cached' : 'content-save'}
          size={24}
          color={status == 'local' ? colors.button.blue : colors.button.black}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {},
  row: {
    width: '100%',
    marginVertical: 5,
    padding: 8,
    borderWidth: 1,
    borderColor: colors.border.blue,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    height: 75,
    width: 75,
    borderRadius: 5,
    resizeMode: 'cover',
    marginRight: 10,
  },
  text: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.text.black,
  },
  iconPosition: {
    position: 'absolute',
    top: 5,
    right: 5,
  },
});
