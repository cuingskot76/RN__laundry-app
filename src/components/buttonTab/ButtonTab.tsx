/* eslint-disable react-native/no-inline-styles */
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';

import {
  BottomTabNavigationEventMap,
  BottomTabBarProps,
} from '@react-navigation/bottom-tabs';
import { NavigationHelpers } from '@react-navigation/native';

interface ButtonTabProps {
  //   state: BottomTabBarProps['state'];
  //   descriptors: BottomTabNavigationProp<Record<string, object | undefined>>;
  //   navigation: BottomTabNavigationProp<Record<string, object | undefined>>;
  //   descriptors: {
  //     [key: string]: {
  //       key: string;
  //       options: {
  //         tabBarLabel?: string;
  //         tabBarAccessibilityLabel?: string;
  //         tabBarTestID?: string;
  //         title?: string;
  //       };
  //       state: {
  //         routes: {
  //           name: string;
  //           key: string;
  //           params?: object;
  //         }[];
  //         index: number;
  //       };
  //       navigation: NavigationHelpers<
  //         Record<string, object | undefined>,
  //         BottomTabNavigationEventMap
  //       >;
  //     };
  //   };
  state: any;
  descriptors: any;
  navigation: any;
}

const ButtonTab = ({ state, descriptors, navigation }: ButtonTabProps) => {
  const focusedOptions = descriptors[state.routes[state.index].key].options;
  console.log(descriptors[state.routes[state.index].key]);
  return (
    <View style={{ flexDirection: 'row' }}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate({ name: route.name, merge: true });
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={index}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{ flex: 1 }}>
            <Text style={{ color: isFocused ? '#673ab7' : '#222' }}>
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    justifyContent: 'space-between',
    paddingHorizontal: 55,
    paddingVertical: 14,
  },
});

export default ButtonTab;
