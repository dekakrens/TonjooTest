import NetInfo from '@react-native-community/netinfo';
import React, {useState, useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import {showMessage} from 'react-native-flash-message';
import {AddPhoto, Button, Gap, Header, Input, Picker} from '../components';
import {colors, getData, storeData} from '../utils';
import {launchCamera} from 'react-native-image-picker';

const gender = [
  {label: 'Male', value: 'Male'},
  {label: 'Felame', value: 'Female'},
];
const AddAgent = ({navigation}) => {
  const [form, setForm] = useState({
    first_name: '',
    last_name: '',
    gender: '',
    email: '',
    avatar: '',
    status: 'local',
  });

  const [agents, setAgents] = useState([]);

  // Message success
  const saveToCloud = () => {
    if (
      form.first_name &&
      form.last_name &&
      form.gender &&
      form.avatar &&
      form.email
    ) {
      showMessage({
        message: 'Berhasil menyimpan data ke Firebase',
        type: 'success',
      });
    } else {
      showMessage({
        message: 'Tidak ada data yang ditambahkan',
        type: 'danger',
      });
    }
    setForm({first_name: '', last_name: '', gender: '', email: '', avatar: ''});
  };

  // Save to local storage
  const saveToLocal = fromButton => {
    if (
      form.first_name &&
      form.last_name &&
      form.gender &&
      form.avatar &&
      form.email
    ) {
      agents.push(form);
      setAgents(agents);
      storeData('AGENTS', agents);
      if (fromButton) {
        showMessage({
          message: 'Berhasil menyimpan ke draft',
          type: 'success',
        });
      } else {
        showMessage({
          message: 'Jaringan tidak stabil. Menyimpan ke draft',
          type: 'warning',
        });
      }
    } else {
      showMessage({
        message: 'Tidak ada data yang ditambahkan',
        type: 'danger',
      });
    }
    setForm({first_name: '', last_name: '', gender: '', email: '', avatar: ''});
  };

  // Add Photo
  const Photo = () => {
    launchCamera(
      {
        mediaType: 'photo',
        maxHeight: 300,
        maxWidth: 300,
        cameraType: 'front',
        includeBase64: true,
      },
      value =>
        setForm({
          ...form,
          avatar: `data:image/png;base64,${value.assets[0].base64}`,
        }),
    );
  };

  // To save an agent to cloud
  const onSubmit = () => {
    NetInfo.fetch().then(state => {
      if (state.type == 'cellular') {
        if (state.details.cellularGeneration == '2g') {
          saveToLocal(false);
        } else {
          saveToCloud();
        }
      } else if (state.isConnected) {
        saveToCloud();
      } else {
        saveToLocal(false);
      }
    });
  };

  useEffect(() => {
    getData('AGENTS').then(res => {
      if (res) setAgents(res);
    });
  }, []);

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
        <AddPhoto src={form.avatar} onPress={() => Photo()} />
        <View style={styles.row}>
          <Button title="Save as Draft" onPress={() => saveToLocal(true)} />
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
