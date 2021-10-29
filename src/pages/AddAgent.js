import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {AddPhoto, Button, Gap, Header, Input, Picker} from '../components';
import {colors} from '../utils';
import NetInfo from '@react-native-community/netinfo';
import {showMessage} from 'react-native-flash-message';

const AddAgent = ({navigation}) => {
  const gender = [
    {label: 'Male', value: 'male'},
    {label: 'Felame', value: 'female'},
  ];

  const [form, setForm] = useState({
    first_name: '',
    last_name: '',
    gender: '',
    email: '',
    avatar: '',
  });

  const messageSuccess = () => {
    showMessage({
      message: 'Berhasil menyimpan data ke Firebase',
      type: 'success',
    });
  };
  const messageNotSuccess = () => {
    showMessage({
      message: 'Jaringan tidak stabil. Menyimpan ke draft',
      type: 'warning',
    });
  };

  // To save an agent to draft
  const onSave = () => {};

  // To save an agent to cloud
  const onSubmit = () => {
    NetInfo.fetch().then(state => {
      if (state.type == 'cellular') {
        if (state.details.cellularGeneration == '2g') {
          messageNotSuccess();
        } else {
          messageSuccess();
        }
      } else if (state.isConnected) {
        messageSuccess();
      } else {
        messageNotSuccess();
      }
    });
  };

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
          <Button title="Save as Draft" onPress={() => onSave()} />
          <Button title="Submit" onPress={() => onSubmit()} />
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
