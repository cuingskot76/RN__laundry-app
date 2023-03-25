import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Router from './router';
import Home from './screens/Home/Home';

const App = () => {
  return (
    <NavigationContainer>
      <Router />
      {/* <Home /> */}
    </NavigationContainer>
  );
};

export default App;
