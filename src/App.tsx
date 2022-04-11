import React from 'react';

import { StatusBar } from 'expo-status-bar';
import { registerRootComponent } from 'expo';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { QueryClientProvider } from 'react-query'


import { Home } from '@screens';
import { queryClient } from '@services';

const App  =  () => {
  return (
    <>
      <StatusBar style='dark' />
      <Home />
    </>
  );
}

export default registerRootComponent(() => {
  return (
    <QueryClientProvider client={queryClient}  >
       <SafeAreaProvider>
        <App />
      </SafeAreaProvider>
    </QueryClientProvider>
  )
})