import React, {useState} from 'react';
import {StyleSheet, Text, View, Dimensions} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import {Gap} from '../atoms';
import {colors} from '../../utils';

const {width} = Dimensions.get('window');

const Picker = ({item, onChangeValue, title}) => {
  const [openPicker, setOpenPicker] = useState(false);
  let [val, setVal] = useState();
  return (
    <View style={styles.row}>
      <Text style={styles.text}>{title}</Text>
      <Gap width={width - 40 - 0.75 * width - 16} />
      <DropDownPicker
        open={openPicker}
        value={val}
        items={item}
        setOpen={setOpenPicker}
        setValue={setVal}
        placeholder=""
        onChangeValue={onChangeValue}
        style={styles.pickerStyle}
        textStyle={styles.textStyle}
        dropDownContainerStyle={styles.dropDownContainer}
      />
    </View>
  );
};

export default Picker;

const styles = StyleSheet.create({
  pickerStyle: {
    borderWidth: 2,
    borderColor: colors.border.grey,
    backgroundColor: colors.background,
    borderRadius: 5,
    width: '75%',
    height: 35,
  },
  dropDownContainer: {
    position: 'absolute',
    borderWidth: 0,
    width: '75%',
    backgroundColor: colors.background,
    elevation: 5,
  },
  textStyle: {
    fontSize: 14,
  },
  text: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.text.black,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
