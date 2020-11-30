import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, SafeAreaView } from 'react-native';
import { ThemeProvider } from 'react-native-elements';

import StackNavigator from '@app/screens/StackNavigator';

const App = () => {
  return (
    <ThemeProvider>
      <NavigationContainer>
        {/* <StatusBar barStyle="dark-content" /> */}
        <SafeAreaView style={styles.safeArea}>
          <StackNavigator />
        </SafeAreaView>
      </NavigationContainer>
    </ThemeProvider>
  );
};

const styles = StyleSheet.create({
  safeArea: { flex: 1 },
});

export default App;
