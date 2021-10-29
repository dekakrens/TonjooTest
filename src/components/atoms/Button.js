import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {colors} from '../../utils';

const Button = ({title, onPress, type, icon, size, color}) => {
  switch (type) {
    case 'icon':
      return (
        <TouchableOpacity onPress={onPress}>
          <Icon name={icon} size={size} color={color} />
        </TouchableOpacity>
      );

    default:
      return (
        <TouchableOpacity onPress={onPress} style={styles.container}>
          <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
      );
  }
};

export default Button;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 5,
    alignItems: 'center',
    backgroundColor: colors.button.blue,
  },
  text: {
    fontSize: 14,
    fontWeight: '700',
    color: colors.text.white,
  },
});
