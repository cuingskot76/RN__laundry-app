import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#eee',
    // backgroundColor: 'salmon',
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
  itemsContainer: {
    marginTop: -450,
  },
  itemContainer: {
    backgroundColor: COLORS.white,
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
  },
  itemId: {
    fontWeight: 'bold',
    fontSize: 20,
    color: COLORS.darkGray,
  },
  itemName: {
    fontSize: 18,
    fontWeight: 'bold',
    // color: COLORS.danger,
    color: '#1572A1',
    marginVertical: 10,
  },
  itemsDetailsContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  itemsDetails: {
    fontWeight: '700',
    fontSize: 16,
    color: COLORS.darkGray,
    marginVertical: 7,
  },
  itemsDetailsName: {
    fontWeight: '400',
    fontSize: 16,
    color: COLORS.lightGray,
  },
  itemsDetailsAddress: {
    fontWeight: '500',
    fontSize: 16,
    color: COLORS.darkGray,
    width: '60%',
  },
});

export default styles;
