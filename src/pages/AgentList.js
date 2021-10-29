import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {Card, Header} from '../components';
import {colors} from '../utils';

const AgentList = ({navigation}) => {
  return (
    <>
      <Header title="Agent List" onPress={() => navigation.goBack()} />
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Card
            firstName="Deny"
            lastName="Kurniawan"
            email="dekakrens@gmail.com"
            gender="Male"
            status="local"
          />
          <Card
            firstName="Deny"
            lastName="Kurniawan"
            email="dekakrens@gmail.com"
            gender="Male"
            status="cloud"
          />
          <Card
            firstName="Deny"
            lastName="Kurniawan"
            email="dekakrens@gmail.com"
            gender="Male"
            status="local"
          />
          <Card
            firstName="Deny"
            lastName="Kurniawan"
            email="dekakrens@gmail.com"
            gender="Male"
            status="cloud"
          />
          <Card
            firstName="Deny"
            lastName="Kurniawan"
            email="dekakrens@gmail.com"
            gender="Male"
            status="local"
          />
          <Card
            firstName="Deny"
            lastName="Kurniawan"
            email="dekakrens@gmail.com"
            gender="Male"
            status="cloud"
          />
          <Card
            firstName="Deny"
            lastName="Kurniawan"
            email="dekakrens@gmail.com"
            gender="Male"
            status="local"
          />
          <Card
            firstName="Deny"
            lastName="Kurniawan"
            email="dekakrens@gmail.com"
            gender="Male"
            status="cloud"
          />
        </ScrollView>
      </View>
    </>
  );
};

export default AgentList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingBottom: 10,
    backgroundColor: colors.background,
  },
});
