import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button} from '../components';
import {colors} from '../utils';

const Menu = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tonjoo Test</Text>
      <View style={styles.content}>
        <View style={styles.button}>
          <Button
            type="icon"
            icon="notebook-multiple"
            size={80}
            onPress={() => navigation.navigate('AgentList')}
          />
          <Text>Agent List</Text>
        </View>
        <View style={styles.button}>
          <Button
            type="icon"
            icon="account-plus"
            size={80}
            onPress={() => navigation.navigate('AddAgent')}
          />
          <Text>Add New Agent</Text>
        </View>
      </View>
    </View>
  );
};

export default Menu;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    backgroundColor: colors.background,
  },
  title: {
    marginTop: 30,
    fontSize: 20,
    fontWeight: '700',
    color: colors.text.black,
    letterSpacing: 1,
  },
  content: {
    flex: 1,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  button: {
    alignItems: 'center',
  },
});
