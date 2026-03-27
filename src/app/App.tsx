import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { queryClient } from '@/shared/api/axios-instance';
import { QueryClientProvider } from '@tanstack/react-query';
import '../shared/localization/i18next';
import { RootStack } from '@/app/navigation/RootStack';
import { ToastProvider } from '@/app/reanimated/ToastContext';

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaProvider>
        <NavigationContainer>
          <ToastProvider>
            <RootStack />
          </ToastProvider>
        </NavigationContainer>
      </SafeAreaProvider>
    </QueryClientProvider>
  );
};

export default App;
