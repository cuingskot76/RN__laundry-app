/* eslint-disable react-native/no-inline-styles */
import { View } from 'react-native';
import React, { useEffect } from 'react';

import { LaundryBag } from '../../../public/assets/images';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type RootStackParamList = {
  Main: undefined;
};

type HomeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList>;

type HomeScreenProps = {
  navigation: HomeScreenNavigationProp;
};

const Splash = ({ navigation }: HomeScreenProps) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Main');
    }, 2000);
  }, [navigation]);

  return (
    <View
      style={{
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <View
        style={{
          width: 300,
          height: 300,
        }}>
        <LaundryBag />
      </View>
    </View>
  );
};

export default Splash;
