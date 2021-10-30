import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {AddAgent, AgentList, Login, Menu} from '../pages';

const Stack = createStackNavigator();

const Router = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        name="AddAgent"
        component={AddAgent}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="AgentList"
        component={AgentList}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Menu"
        component={Menu}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Router;
