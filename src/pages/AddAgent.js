import React from 'react';
import {StyleSheet, View} from 'react-native';
import {AddPhoto, Button, Gap, Header, Input, Picker} from '../components';
import {colors} from '../utils';

const AddAgent = ({navigation}) => {
  const gender = [
    {label: 'Male', value: 'male'},
    {label: 'Felame', value: 'female'},
  ];
  return (
    <>
      <Header title="Add Agent" onPress={() => navigation.goBack()} />
      <View style={styles.container}>
        <Gap height={50} />
        <Input title="First Name" />
        <Gap height={15} />
        <Input title="Last Name" />
        <Gap height={15} />
        <Picker title="Gender" item={gender} />
        <Gap height={15} />
        <Input title="Email" keyboardType="email-address" />
        <Gap height={15} />
        <AddPhoto />
        <View style={styles.row}>
          <Button title="Save as Draft" />
          <Button title="Submit" />
        </View>
      </View>
    </>
  );
};

export default AddAgent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: colors.background,
  },
  row: {
    marginTop: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
