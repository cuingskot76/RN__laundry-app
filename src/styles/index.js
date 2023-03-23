import {COLORS} from '../constants';

const {StyleSheet} = require('react-native/types');

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: COLORS.SUCCESS,
  },
});

export default styles;
