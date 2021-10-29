import React from 'react';
import {StyleSheet, View} from 'react-native';
import {AddPhoto, Button, Gap, Header, Input} from '../components';

const AddAgent = ({navigation}) => {
  return (
    <>
      <Header title="Add Agent" onPress={() => navigation.goBack()} />
      <View style={styles.container}>
        <Gap height={50} />
        <Input title="First Name" />
        <Gap height={15} />
        <Input title="Last Name" />
        <Gap height={15} />
        <Input title="Gender" />
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
    padding: 20,
  },
  row: {
    marginTop: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
