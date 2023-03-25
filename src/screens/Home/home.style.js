import { StyleSheet } from 'react-native';

import { COLORS, FONT, SIZES } from '../../constants';

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  userName: {
    fontFamily: FONT.bold,
    fontSize: SIZES.xxLarge,
    color: 'white',
    fontWeight: '800',
    marginTop: 5,
  },
  welcomeMessage: {
    fontFamily: FONT.medium,
    fontSize: SIZES.large,
    fontWeight: '600',
    color: 'white',
    marginTop: 10,
  },
});

export default styles;
