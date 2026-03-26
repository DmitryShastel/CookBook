import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import FlashMessage from 'react-native-flash-message';
import { queryClient } from '@/shared/api/axios-instance';
import { QueryClientProvider } from '@tanstack/react-query';

import '../shared/localization/i18next';
import { RootStack } from '@/app/navigation/RootStack';

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaProvider>
        <NavigationContainer>
          <RootStack />
          <FlashMessage />
        </NavigationContainer>
      </SafeAreaProvider>
    </QueryClientProvider>
  );
};

export default App;
