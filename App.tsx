import React from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import styles from './src/styles';

const App = () => {
  return (
    <NavigationContainer>
      <View>
        <Text style={styles.title}>App</Text>
      </View>
    </NavigationContainer>
  );
};

export default App;
