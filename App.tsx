import React from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import styles from './src/styles';
import Home from './src/screens/Home/Home';

import Bell from './public/assets/images/user.svg';

const App = () => {
  return (
    <NavigationContainer>
      <View>
        <Text style={styles.title}>App</Text>
        <Bell />
        <Home />
      </View>
    </NavigationContainer>
  );
};

export default App;
