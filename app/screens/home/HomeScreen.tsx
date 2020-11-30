import React, { FC } from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import { View, Text } from 'react-native';
import { Button } from 'react-native-elements';

import { styles } from './styles';

const HomeScreen: FC<StackScreenProps<any>> = ({ navigation }) => {
  return (
    <View style={styles.homeScreenWrapper}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Detail')}
      />
    </View>
  );
};

export default HomeScreen;
