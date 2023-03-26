import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../screens/Home/Home';
import Order from '../screens/Orders/Order';
import Notification from '../screens/Notifications/Notification';
import Profile from '../screens/Profile/Profile';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ButtonTab from '../components/buttonTab/ButtonTab';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const BottomNavigator = () => {
  return (
    <Tab.Navigator
      // allowAsProps={true}
      tabBar={props => <ButtonTab {...props} />}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Order" component={Order} />
      <Tab.Screen name="Notification" component={Notification} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

const Router = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="BottomNavigator"
        options={{ headerShown: false }}
        component={BottomNavigator}
      />
    </Stack.Navigator>
  );
};

export default Router;
