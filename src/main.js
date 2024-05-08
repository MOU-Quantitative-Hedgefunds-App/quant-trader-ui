import React, { useState } from 'react';
import {
  Provider as PaperProvider,
  DefaultTheme,
  DarkTheme,
} from 'react-native-paper';
import { Updates } from 'expo';
import { Appearance, useColorScheme } from 'react-native';
import { View } from 'react-native';
import {Text, StyleSheet} from 'react-native';
import { RootNavigator } from './rootNavigator';
import { PreferencesContext } from './context/preferencesContext';

export const Main = () => {
  const colorScheme = useColorScheme();
  const [theme, setTheme] = React.useState(
    colorScheme === 'dark' ? 'dark' : 'light'
  );


  function toggleTheme() {
    setTheme(theme => (theme === 'light' ? 'dark' : 'light'));
  }



  const preferences = React.useMemo(
    () => ({
      toggleTheme,
 
      theme,

    }),
    [theme]
  );
  const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: 'rgb(255, 45, 85)',
    },
  };

  return (
    <PreferencesContext.Provider value={preferences}>
    <PaperProvider
      theme={
        theme === 'light'
          ? {
              ...DefaultTheme,
              colors: { MyTheme, primary: '#1ba1f2' },
            }
          : {
              ...DarkTheme,
              colors: { MyTheme, primary: '#1ba1f2' },
            }
      }
    >
      <RootNavigator />
    </PaperProvider>
  </PreferencesContext.Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    color: 'white'
  },
});