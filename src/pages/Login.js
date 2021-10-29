import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {ILLogo} from '../assets';
import {Button, Gap, Input} from '../components';
import {colors} from '../utils';

const Login = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Image source={ILLogo} style={styles.image} />
      <Text style={styles.title}>Tonjoo Test</Text>

      {/* Input Form */}
      <View style={styles.formContainer}>
        <View style={styles.inputForm}>
          <Input type="login" title="Username" keyboardType="email-address" />
          <Gap height={15} />
          <Input type="login" title="Password" isSecure />
          <Gap height={30} />
        </View>

        {/* Button */}
        <Button title="Login" onPress={() => navigation.replace('Menu')} />
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
