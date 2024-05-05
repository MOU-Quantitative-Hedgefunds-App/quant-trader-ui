import React from 'react';
import { StyleSheet, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { AppearanceProvider } from 'react-native-appearance';

import { Main } from './src/main';

export default function App() {
  return (
    <SafeAreaProvider>
      <AppearanceProvider>
        <Main />
        <StatusBar style="auto" />
      </AppearanceProvider>
    </SafeAreaProvider>

  );
}