/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  Text,
  View,
  Button,
  Alert,
  ScrollView,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';

import styles from './home.style';

import Wave from '../../../public/assets/icons/wave-5.png';
import WashingMachine from '../../../public/assets/images/washing-machine.png';
import Iron from '../../../public/assets/images/iron.png';
import DryCleaning from '../../../public/assets/images/dry-cleaning.png';

import { COLORS, person, wave } from '../../constants';

// interface navigationProps {
//   navigation: any;
// }

const Home = () => {
  const services = [
    {
      id: 1,
      name: 'Wash & Iron',
      image: WashingMachine,
    },
    {
      id: 2,
      name: 'Ironing',
      image: Iron,
    },
    {
      id: 3,
      name: 'Dry Cleaning',
      image: DryCleaning,
    },
  ];

  // const slicedServices = services.slice(0, 2);

  return (
    <View style={{ backgroundColor: '#eee', height: '100%' }}>
      <View
        style={[
          {
            backgroundColor: COLORS.darkGreen,
            height: 400,
            borderBottomLeftRadius: 50,
            borderBottomRightRadius: 50,
            paddingLeft: 20,
            position: 'relative',
          },
          styles.container,
        ]}>
        <View
          style={{
            width: 400,
            height: 250,
            position: 'absolute',
            right: -150,
            transform: [{ rotate: '45deg' }],
          }}>
          <Image source={Wave} style={{ width: '100%', height: '100%' }} />
        </View>
        <View>
          <View
            style={{
              width: 75,
              height: 75,
              borderRadius: 50,
              overflow: 'hidden',
              marginBottom: 10,
            }}>
            <Image source={person} style={{ width: '100%', height: '100%' }} />
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
            // contentContainerStyle={{
            //   display: 'flex',
            //   backgroundColor: 'salmon',
            //   flexDirection: 'row',
            // }}
            contentContainerStyle={{
              marginTop: 50,
            }}
            numColumns={2}
            renderItem={({ item, index }) => {
              if (index === 0 || index === 1) {
                return (
                  <TouchableOpacity
                    style={{
                      backgroundColor: '#fff',
                      borderRadius: 20,
                      width: 150,
                      height: 200,
                      marginRight: 20,
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      flex: 1,
                    }}>
                    <Image
                      source={item.image}
                      style={{ width: 70, height: 70, marginBottom: 10 }}
                    />
                    <Text
                      style={{
                        fontSize: 20,
                        fontWeight: 'bold',
                        color: 'black',
                        // fontFamily: 'poppins',
                      }}>
                      {item.name}
                    </Text>
                  </TouchableOpacity>
                );
              } else {
                return (
                  <TouchableOpacity
                    style={{
                      backgroundColor: '#fff',
                      borderRadius: 10,
                      width: 150,
                      height: 150,
                      marginRight: 20,
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      flex: 0.47,
                      marginTop: 20,
                    }}>
                    <Image
                      source={item.image}
                      style={{ width: 50, height: 50, marginBottom: 10 }}
                    />
                    <Text style={{ fontSize: 16, fontWeight: 'bold' }}>
                      {item.name}
                    </Text>
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
