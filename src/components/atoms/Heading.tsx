import { StyleSheet, Text, TextStyle } from 'react-native';
import React from 'react';

interface HeadingProps {
  isLarge?: boolean;
  style?: TextStyle;
  children: React.ReactNode;
}

const Heading = ({ children, isLarge, style }: HeadingProps) => {
  return (
    <Text style={[isLarge ? styles.largeText : styles.normalText, style]}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  normalText: {
    fontWeight: 'normal',
    fontSize: 20,
  },
  largeText: {
    fontWeight: 'bold',
    fontSize: 22,
  },
});

export default Heading;
