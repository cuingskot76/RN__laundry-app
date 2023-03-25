import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './router';
import Home from './screens/Home/Home';

const App = () => {
  return (
    <NavigationContainer>
      {/* <Routes /> */}
      <Home />
    </NavigationContainer>
  );
};

export default App;
