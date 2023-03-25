import React from 'react';
import {Text, View, Button} from 'react-native';

interface Props {
  navigation: any;
}

const Home = ({navigation}: Props) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home</Text>
      <Button
        title="Go to details"
        onPress={() => navigation.navigate('Test')}
      />
    </View>
  );
};

export default Home;
