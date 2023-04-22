import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../screens/Home/Home';
import Order from '../screens/Orders/Order';
import Notification from '../screens/Notifications/Notification';
import Profile from '../screens/Profile/Profile';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ButtonTab from '../components/buttonTab/ButtonTab';
import Splash from '../components/splash/Splash';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const allButtonTabs = item => {
  return <ButtonTab {...item} />;
};

const BottomNavigator = () => {
  return (
    <Tab.Navigator
      // allowAsProps={true}
      // tabBar={props => <ButtonTab {...props} />}
      tabBar={props => allButtonTabs(props)}>
      <Tab.Screen
        name="Home"
        options={{ headerShown: false }}
        component={Home}
      />
      <Tab.Screen
        name="Order"
        options={{ headerShown: false }}
        component={Order}
      />
      <Tab.Screen
        name="Notification"
        options={{ headerShown: false }}
        component={Notification}
      />
      <Tab.Screen
        name="Profile"
        options={{ headerShown: false }}
        component={Profile}
      />
    </Tab.Navigator>
  );
};

const Router = () => {
  return (
    <Stack.Navigator initialRouteName="Main">
      <Stack.Screen
        name="Splash"
        options={{ headerShown: false }}
        component={Splash}
      />
      <Stack.Screen
        name="Main"
        options={{ headerShown: false }}
        component={BottomNavigator}
      />
    </Stack.Navigator>
  );
};

export default Router;
