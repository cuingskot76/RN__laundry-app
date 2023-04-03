import { StyleSheet } from 'react-native';

import { COLORS, FONT, SIZES } from '../../constants';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#eee',
    height: '100%',
  },
  containerBg: {
    width: '100%',
    backgroundColor: COLORS.darkGreen,
    height: 500,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    paddingLeft: 20,
    position: 'relative',
  },
  bgWave: {
    width: 400,
    height: 250,
    position: 'absolute',
    right: -150,
    transform: [{ rotate: '45deg' }],
  },
  profileContainer: {
    width: 75,
    height: 75,
    borderRadius: 50,
    overflow: 'hidden',
    marginBottom: 10,
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
  itemsContainer: {
    backgroundColor: '#fff',
    borderRadius: 20,
    width: 150,
    height: 200,
    marginRight: 20,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
});

export default styles;
