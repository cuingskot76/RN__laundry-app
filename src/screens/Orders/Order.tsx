/* eslint-disable react-native/no-inline-styles */
import { View, Text, Image, FlatList, TouchableOpacity } from 'react-native';
import React from 'react';
import { bannerWave } from '../../../public/assets/images';
import styles from './order.style';
import Heading from '../../components/atoms/Heading';
import { orders } from '../../constants';

const Order = () => {
  return (
    <View style={styles.container}>
      <View style={styles.containerBg}>
        <Heading isLarge={true} style={styles.headingText}>
          Orders
        </Heading>
        <View style={styles.bgWave}>
          <Image
            source={bannerWave}
            style={{ width: '100%', height: '100%' }}
          />
        </View>

        {/* orders */}
        <FlatList
          data={orders}
          renderItem={({ item, index }) => {
            return (
              <TouchableOpacity style={styles.itemContainer}>
                <View>
                  <Text style={styles.itemId}>{item.id}</Text>
                  <Text style={styles.itemName}>{item.name}</Text>
                  <View>
                    <Text>{item.date}</Text>
                    <Text>{item.status}</Text>
                    <Text>{item.pickup}</Text>
                    <Text>{item.address}</Text>
                    <Text>{item.delivery}</Text>
                  </View>
                </View>
              </TouchableOpacity>
            );
          }}
        />
        {/* end__orders */}
      </View>
    </View>
  );
};

export default Order;
