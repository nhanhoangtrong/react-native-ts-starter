import React, { FC } from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const HomeScreen: FC<StackScreenProps<any>> = ({ navigation }) => {
  return (
    <View style={styles.screenWrapper}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Detail')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screenWrapper: {
    backgroundColor: Colors.lighter,
    flex: 1,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default HomeScreen;
