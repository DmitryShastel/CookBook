import { initializeApp } from 'firebase/app';
import { getMessaging, getToken, onMessage } from 'firebase/messaging';
import { firebaseConfig } from '@firebase-config';

const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);

export async function requestWebPushToken() {
  try {
    const token = await getToken(messaging, {
      vapidKey:
        'BFz75opVTfUK0GGqSsDrjg6PSEkxnGXnmNgih4wezpSBHZOjejIqQ6OuT9B2805MlR0u9OtEf-v_Aj4jqbgX188',
    });
    return token;
  } catch (err) {
    console.error('Error:', err);
    return null;
  }
}

export function subscribeToForegroundMessages(
  callback: (payload: unknown) => void,
) {
  onMessage(messaging, (payload) => {
    callback(payload);
  });
}
