import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {colors} from '../../utils';

const AddPhoto = ({onPress, src}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Photo</Text>
      {src ? (
        <Image style={styles.photo} source={{uri: src}} />
      ) : (
        <TouchableOpacity style={styles.photo} onPress={onPress}>
          <Icon name="camera" size={50} color={colors.button.black} />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default AddPhoto;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  photo: {
    height: 250,
    width: '75%',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: colors.border.grey,
  },
  text: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.text.black,
  },
});
