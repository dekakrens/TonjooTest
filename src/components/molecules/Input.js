import React from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';
import {colors} from '../../utils';
import {Gap} from '../atoms';

const Input = ({type, value, onChangeText, title, isSecure, keyboardType}) => {
  switch (type) {
    case 'login':
      return (
        <View>
          <Text style={styles.text}>{title}</Text>
          <Gap height={5} />
          <TextInput
            value={value}
            onChangeText={onChangeText}
            style={styles.textInput(false)}
            secureTextEntry={isSecure}
            keyboardType={keyboardType}
          />
        </View>
      );

    default:
      return (
        <View style={styles.row}>
          <Text style={styles.text}>{title}</Text>
          <Gap height={5} />
          <TextInput
            value={value}
            onChangeText={onChangeText}
            style={styles.textInput(true)}
            keyboardType={keyboardType}
          />
        </View>
      );
  }
};

export default Input;

const styles = StyleSheet.create({
  text: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.text.black,
  },
  textInput: isDefault => ({
    width: '100%',
    maxWidth: isDefault ? '75%' : '100%',
    borderWidth: 2,
    borderRadius: 5,
    borderColor: colors.border.grey,
    paddingVertical: 0,
    paddingHorizontal: 10,
  }),
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
