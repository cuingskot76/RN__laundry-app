import { COLORS, FONT, SIZES } from './theme';
import person from '../../public/assets/images/person.png';
import wave from '../../public/assets/images/wave.png';

// services
import {
  featureDryCleaning,
  featureIron,
  featureOther,
  featureWashing,
} from '../../public/assets/images';

export { COLORS, FONT, SIZES, person, wave };

export const services = [
  {
    id: 1,
    name: 'Wash & Iron',
    image: featureWashing,
  },
  {
    id: 2,
    name: 'Ironing',
    image: featureIron,
  },
  {
    id: 3,
    name: 'Dry Cleaning',
    image: featureDryCleaning,
  },
  {
    id: 4,
    name: 'Others',
    image: featureOther,
  },
];

export const orders = [
  {
    id: 'LKNW92N',
    name: 'Washing and Ironing',
    date: '2 April 2023, 10:00 AM',
    status: 'Completed',
    pickup: '2 April 2023, 02:00 PM',
    address: 'Jl. Rambutan, Rt 02/05, sebelah pos kampling',
    delivery: '3 April 2023, 09:00 AM',
    subTotal: '57.000',
    discount: '0',
    total: '57.000',
  },
  {
    id: '9DLMDN1',
    name: 'Ironing',
    date: '1 April 2023, 08:00 AM',
    status: 'Pending',
    pickup: '-',
    address: 'Jl. Klapasawit, Rt 01/03, rumah cat biru pager hitam',
    delivery: '-',
    subTotal: '25.000',
    discount: '0',
    total: '25.000',
  },
  {
    id: 'OPCN86B',
    name: 'Dry Cleaning',
    date: '27 March 2023, 12:00 AM',
    status: 'On Progress',
    pickup: '27 March 2023, 02:00 PM',
    address: 'Jl. Jendral Sudirman, Rt 12/11, sebelah kampus',
    delivery: '-',
    subTotal: '35.000',
    discount: '0',
    total: '35.000',
  },
];
