import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants';

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
  headingText: {
    textAlign: 'center',
    zIndex: 1,
    marginTop: 50,
    marginBottom: 10,
    color: COLORS.white,
    fontSize: 27,
  },
});

export default styles;
