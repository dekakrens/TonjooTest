import NetInfo from '@react-native-community/netinfo';
import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {showMessage} from 'react-native-flash-message';
import {AddPhoto, Button, Gap, Header, Input, Picker} from '../components';
import {colors} from '../utils';
import {launchCamera} from 'react-native-image-picker';

const AddAgent = ({navigation}) => {
  const gender = [
    {label: 'Male', value: 'Male'},
    {label: 'Felame', value: 'Female'},
  ];

  const [form, setForm] = useState({
    first_name: '',
    last_name: '',
    gender: '',
    email: '',
    avatar: '',
  });

  // Message success
  const messageSuccess = () => {
    showMessage({
      message: 'Berhasil menyimpan data ke Firebase',
      type: 'success',
    });
  };

  // Message not success
  const messageNotSuccess = () => {
    showMessage({
      message: 'Jaringan tidak stabil. Menyimpan ke draft',
      type: 'warning',
    });
  };

  // Add Photo
  const Photo = () => {
    launchCamera(
      {
        mediaType: 'photo',
        maxWidth: 100,
        maxHeight: 100,
        cameraType: 'front',
        includeBase64: true,
      },
      value => setForm({...form, avatar: value.assets[0].base64}),
    );
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
        <Input
          title="First Name"
          value={form.first_name}
          onChangeText={value => setForm({...form, first_name: value})}
        />
        <Gap height={15} />
        <Input
          title="Last Name"
          value={form.last_name}
          onChangeText={value => setForm({...form, last_name: value})}
        />
        <Gap height={15} />
        <Picker
          title="Gender"
          item={gender}
          onChangeValue={value => setForm({...form, gender: value})}
        />
        <Gap height={15} />
        <Input
          title="Email"
          keyboardType="email-address"
          value={form.email}
          onChangeText={value => setForm({...form, email: value})}
        />
        <Gap height={15} />
        <AddPhoto onPress={() => Photo()} />
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
