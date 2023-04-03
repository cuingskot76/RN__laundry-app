/* eslint-disable react-native/no-inline-styles */
import { View, Text, Image } from 'react-native';
import React from 'react';
import styles from './profile.style';
import Heading from '../../components/atoms/Heading';
import { bannerWave } from '../../../public/assets/images';

const Profile = () => {
  return (
    <View style={styles.container}>
      <View style={styles.containerBg}>
        <Heading isLarge={true} style={styles.headingText}>
          Profile
        </Heading>
        <View style={styles.bgWave}>
          <Image
            source={bannerWave}
            style={{ width: '100%', height: '100%' }}
          />
        </View>
      </View>
    </View>
  );
};

export default Profile;
