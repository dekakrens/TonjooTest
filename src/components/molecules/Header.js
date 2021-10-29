import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {Gap} from '../atoms';
import {colors} from '../../utils';

const Header = ({onPress, title}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress}>
        <Icon name="arrow-back" size={24} color={colors.button.black} />
      </TouchableOpacity>
      <Text style={styles.text}>{title}</Text>
      <Gap width={24} />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingVertical: 10,
    paddingHorizontal: 15,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors.background,
  },
  text: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.text.black,
    letterSpacing: 1,
  },
});
