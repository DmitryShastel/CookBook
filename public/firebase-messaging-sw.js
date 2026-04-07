importScripts(
  'https://www.gstatic.com/firebasejs/9.6.10/firebase-app-compat.js',
);
importScripts(
  'https://www.gstatic.com/firebasejs/9.6.10/firebase-messaging-compat.js',
);

firebase.initializeApp({
  apiKey: 'AIzaSyAKWJIPCPISN9ETEEl7kfqGnQeP_QXZQmc',
  authDomain: 'fir-progect-60fe1.firebaseapp.com',
  projectId: 'fir-progect-60fe1',
  messagingSenderId: '1019750165503',
  appId: '1:1019750165503:web:852e80d14646f83dd4d5ca',
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log('Payload:', payload);

  const notification = payload.notification;

  self.registration.showNotification(notification.title, {
    body: notification.body,
    icon: '/icon.png',
  });
});
