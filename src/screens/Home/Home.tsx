/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Text, View, Image, FlatList, TouchableOpacity } from 'react-native';

import styles from './home.style';

import { bannerWave } from '../../../public/assets/images';

import { person, services } from '../../constants';
import Heading from '../../components/atoms/Heading';

const Home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.containerBg}>
        <View style={styles.bgWave}>
          <Image
            source={bannerWave}
            style={{ width: '100%', height: '100%' }}
          />
        </View>
        <View>
          <View style={styles.profileContainer}>
            <Image
              source={person}
              alt="user-profile"
              style={{ width: '100%', height: '100%' }}
            />
          </View>
          <View>
            <Text style={styles.welcomeMessage}>Welcome back</Text>
            <Text style={styles.userName}>Afrizal Setya</Text>
          </View>
        </View>

        {/* services */}
        <View>
          <FlatList
            data={services}
            contentContainerStyle={{
              marginTop: 50,
            }}
            numColumns={2}
            renderItem={({ item, index }) => {
              if (index === 0 || index === 1) {
                return (
                  <TouchableOpacity style={styles.itemsContainer}>
                    <Image
                      source={item.image}
                      style={{ width: 70, height: 70, marginBottom: 10 }}
                    />
                    <Heading isLarge={true} style={{ color: 'black' }}>
                      {item.name}
                    </Heading>
                  </TouchableOpacity>
                );
              } else {
                return (
                  <TouchableOpacity
                    style={[styles.itemsContainer, { marginTop: 20 }]}>
                    <Image
                      source={item.image}
                      style={{ width: 70, height: 70, marginBottom: 10 }}
                    />
                    <Heading isLarge={true} style={{ color: 'black' }}>
                      {item.name}
                    </Heading>
                  </TouchableOpacity>
                );
              }
            }}
          />
        </View>
        {/* end services */}
      </View>
    </View>
  );
};

export default Home;
