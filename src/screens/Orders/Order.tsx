/* eslint-disable react-native/no-inline-styles */
import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import { bannerWave } from '../../../public/assets/images';
import styles from './order.style';
import Heading from '../../components/atoms/Heading';
import { COLORS, orders } from '../../constants';

const Order = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.containerBg} />
      <View style={styles.bgWave}>
        <Image source={bannerWave} style={{ width: '100%', height: '100%' }} />
      </View>
      <View style={styles.itemsContainer}>
        <Heading isLarge={true} style={styles.headingText}>
          Orders
        </Heading>

        {/* orders */}
        <FlatList
          data={orders}
          scrollEnabled={false}
          contentContainerStyle={{
            // borderRadius: 10,
            // minHeight: '100%',
            // height: '150%',
            padding: 20,
          }}
          renderItem={({ item, index }) => {
            return (
              <TouchableOpacity key={index} style={styles.itemContainer}>
                <View>
                  <Text style={styles.itemId}>#{item.id}</Text>
                  <Text style={styles.itemName}>{item.name.toUpperCase()}</Text>
                  <View style={styles.itemsDetailsContainer}>
                    <Text style={styles.itemsDetailsName}>Date & Time</Text>
                    <Text style={styles.itemsDetails}>{item.date}</Text>
                  </View>
                  <View style={styles.itemsDetailsContainer}>
                    <Text style={styles.itemsDetailsName}>Status</Text>
                    <Text
                      style={[
                        item.status.toLowerCase() === 'completed' && {
                          color: '#00BFA6',
                        },
                        item.status.toLowerCase() === 'pending' && {
                          color: '#E97777',
                        },
                        item.status.toLowerCase() === 'on progress' && {
                          color: '#FFA000',
                        },
                        { fontWeight: 'bold', fontSize: 16 },
                      ]}>
                      {item.status}
                    </Text>
                  </View>
                  <View style={styles.itemsDetailsContainer}>
                    <Text style={styles.itemsDetailsName}>Pickup</Text>
                    <Text style={styles.itemsDetails}>{item.pickup}</Text>
                  </View>
                  <View style={styles.itemsDetailsContainer}>
                    <Text style={styles.itemsDetailsName}>Address</Text>
                    <Text style={styles.itemsDetails}>
                      {item.address.length >= 20 ? (
                        <Text>
                          {item.address.substring(0, 20)}
                          <Text>...</Text>
                        </Text>
                      ) : (
                        item.address
                      )}
                    </Text>
                  </View>
                  <View style={styles.itemsDetailsContainer}>
                    <Text style={styles.itemsDetailsName}>Delivery</Text>
                    <Text style={styles.itemsDetails}>{item.delivery}</Text>
                  </View>
                </View>
                {/* price */}
                <View
                  style={{
                    marginTop: 15,
                    borderTopWidth: 2.5,
                    borderStyle: 'dashed',
                    borderColor: COLORS.darkWhite,
                    // backgroundColor: 'salmon',
                  }}>
                  <View
                    style={[styles.itemsDetailsContainer, { paddingTop: 15 }]}>
                    <Text style={styles.itemsDetailsName}>Sub Total</Text>
                    <Text style={styles.itemsDetails}>Rp. {item.subTotal}</Text>
                  </View>
                  <View style={styles.itemsDetailsContainer}>
                    <Text style={styles.itemsDetailsName}>Discount</Text>
                    <Text style={styles.itemsDetails}>Rp. {item.discount}</Text>
                  </View>
                  <View style={styles.itemsDetailsContainer}>
                    <Text
                      style={[
                        styles.itemsDetailsName,
                        {
                          fontWeight: 'bold',
                          color: COLORS.darkGray,
                          fontSize: 20,
                        },
                      ]}>
                      Total
                    </Text>
                    <Text
                      style={[
                        styles.itemsDetailsName,
                        {
                          fontWeight: 'bold',
                          color: COLORS.danger,
                          fontSize: 20,
                          marginVertical: 15,
                        },
                      ]}>
                      Rp. {item.total}
                    </Text>
                  </View>
                </View>
                {/* triangel */}
                {/* <View
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    right: 0,
                    width: 0,
                    height: 0,
                    backgroundColor: 'transparent',
                    borderStyle: 'solid',
                    borderLeftWidth: 20,
                    borderRightWidth: 20,
                    borderBottomWidth: 20,
                    borderLeftColor: 'transparent',
                    borderRightColor: 'transparent',
                    borderBottomColor: '#eee',
                  }}
                /> */}
                <View>
                  {[...Array(7)].map((_, i) => (
                    <View
                      key={i}
                      style={{
                        position: 'absolute',
                        bottom: -20,
                        right: i * 50,
                        width: 0,
                        height: 0,
                        backgroundColor: 'transparent',
                        borderStyle: 'solid',
                        borderLeftWidth: 20,
                        borderRightWidth: 20,
                        borderBottomWidth: 20,
                        borderLeftColor: 'transparent',
                        borderRightColor: 'transparent',
                        borderBottomColor: '#eee',
                      }}
                    />
                  ))}
                </View>
              </TouchableOpacity>
            );
          }}
        />

        {/* {orders.map((item, index) => {
          return (
            <TouchableOpacity key={index} style={styles.itemContainer}>
              <View>
                <Text style={styles.itemId}>#{item.id}</Text>
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
        })} */}
        {/* end__orders */}
      </View>
    </ScrollView>
  );
};

export default Order;
