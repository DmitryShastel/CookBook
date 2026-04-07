import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { queryClient } from '@/shared/api/axios-instance';
import { QueryClientProvider } from '@tanstack/react-query';
import '../shared/localization/i18next';
import { RootStack } from '@/app/navigation/RootStack';
import { ToastProvider, useToast } from '@/shared/reanimated/ToastContext';
import { useEffect } from 'react';
import {
  requestWebPushToken,
  subscribeToForegroundMessages,
} from '@/shared/api/firebase/webPush';
import { Alert } from 'react-native';

const App = () => {
  const toast = useToast();

  useEffect(() => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker
        .register('/firebase-messaging-sw.js')
        .then(() => {
          requestWebPushToken();
          subscribeToForegroundMessages((payload) => {
            const { title, body } = payload.notification;
            toast.show(`${title}: ${body}`, 'top', 'green');
          });
        })
        .catch((err) => {
          Alert.alert('error description', String(err));
        });
    }
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaProvider>
        <NavigationContainer>
          <ToastProvider>{<RootStack />}</ToastProvider>
        </NavigationContainer>
      </SafeAreaProvider>
    </QueryClientProvider>
  );
};

export default App;
