import axios from 'axios';
import React, {useState} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {ILLogo} from '../assets';
import {Button, Gap, Input} from '../components';
import {API_HOST} from '../config/API_HOST';
import {colors, storeData} from '../utils';

const Login = ({navigation}) => {
  const [form, setForm] = useState({
    username: '',
    password: '',
  });

  // Login function
  const onContinue = () => {
    axios
      .post(`${API_HOST.url}authenticate`, form)
      .then(res => {
        if (res) {
          storeData('TOKEN', res.data.token);
          navigation.replace('Menu');
        }
      })
      .catch(e => {
        if (e) {
          // Do nothing
        }
      });
  };

  return (
    <View style={styles.container}>
      <Image source={ILLogo} style={styles.image} />
      <Text style={styles.title}>Tonjoo Test</Text>

      {/* Input Form */}
      <View style={styles.formContainer}>
        <View style={styles.inputForm}>
          <Input
            type="login"
            title="Username"
            value={form.username}
            onChangeText={value => setForm({...form, username: value})}
            keyboardType="email-address"
          />
          <Gap height={15} />
          <Input
            type="login"
            title="Password"
            value={form.password}
            onChangeText={value => setForm({...form, password: value})}
            isSecure
          />
          <Gap height={30} />
        </View>

        {/* Button */}
        <Button title="Login" onPress={() => onContinue()} />
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    backgroundColor: colors.background,
  },
  formContainer: {
    alignItems: 'flex-end',
    width: '80%',
    paddingVertical: 50,
  },
  image: {
    height: 200,
    width: 200,
    paddingBottom: 50,
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    color: colors.text.black,
    letterSpacing: 1,
  },
  inputForm: {
    width: '100%',
  },
});
