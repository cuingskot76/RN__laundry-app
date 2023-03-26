import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import {
  IconHome,
  IconHomeActive,
  IconOrder,
  IconOrderActive,
  IconNotification,
  IconNotificationActive,
  IconProfile,
  IconProfileActive,
} from '../../../public/assets/icons';
import { COLORS } from '../../constants';

interface TabItemProps {
  isFocused: boolean;
  onPress: () => void;
  onLongPress: () => void;
  label: string;
}

const Home = ({ isFocused }: { isFocused: boolean }) => {
  return isFocused ? <IconHomeActive /> : <IconHome />;
};

const Order = ({ isFocused }: { isFocused: boolean }) => {
  return isFocused ? <IconOrderActive /> : <IconOrder />;
};

const Notification = ({ isFocused }: { isFocused: boolean }) => {
  return isFocused ? <IconNotificationActive /> : <IconNotification />;
};

const Profile = ({ isFocused }: { isFocused: boolean }) => {
  return isFocused ? <IconProfileActive /> : <IconProfile />;
};

const getIcon = (label: string, isFocused: boolean) => {
  switch (label) {
    case 'Home':
      return <Home isFocused={isFocused} />;
    case 'Order':
      return <Order isFocused={isFocused} />;
    case 'Notification':
      return <Notification isFocused={isFocused} />;
    case 'Profile':
      return <Profile isFocused={isFocused} />;
    default:
      return <Home isFocused={isFocused} />;
  }
};

const TabItem = ({ isFocused, onPress, onLongPress, label }: TabItemProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      onLongPress={onLongPress}
      style={styles.container}>
      {getIcon(label, isFocused)}
      <Text style={isFocused ? styles.textFocused : styles.textUnfocused}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default TabItem;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  textFocused: {
    color: COLORS.darkGreen,
    fontWeight: 'bold',
  },
  textUnfocused: {
    color: COLORS.darkGray,
    fontWeight: 'normal',
  },
});
