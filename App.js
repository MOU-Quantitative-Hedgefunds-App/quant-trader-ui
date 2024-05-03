import React from 'react';
import { StyleSheet, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider as PaperProvider } from 'react-native-paper'; // Importa PaperProvider de react-native-paper
import { NavigationContainer } from '@react-navigation/native'; // Importa NavigationContainer de @react-navigation/native
import { Main } from './src/screens/Main';

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <SafeAreaProvider>
          <View style={styles.container}>
            <Main />
            <StatusBar style="auto" />
          </View>
        </SafeAreaProvider>
      </NavigationContainer>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
