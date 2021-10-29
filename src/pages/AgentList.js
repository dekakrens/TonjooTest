import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {Card, Header} from '../components';
import {API_HOST} from '../config/API_HOST';
import {colors, getData} from '../utils';

const AgentList = ({navigation}) => {
  const [list, setList] = useState([]);

  useEffect(() => {
    getData('TOKEN').then(res => {
      axios
        .get(`${API_HOST.url}contacts?token=${res}`)
        .then(res => setList(res.data.data))
        .catch(e => {
          if (e) {
            // Do nothing
          }
        });
    });
  }, []);

  return (
    <>
      <Header title="Agent List" onPress={() => navigation.goBack()} />
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {list.map((item, key) => {
            return (
              <Card
                key={key}
                firstName={item.first_name}
                lastName={item.last_name}
                email={item.email}
                gender={item.gender}
                avatar={{uri: item.avatar}}
                status={item?.status}
              />
            );
          })}
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
