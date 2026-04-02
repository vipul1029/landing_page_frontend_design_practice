importScripts('https://www.gstatic.com/firebasejs/9.22.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.22.0/firebase-messaging-compat.js');

const firebaseConfig = {
  apiKey: "AIzaSyA7yBtbSTcxA7_A7sMExb69Q9chEz5lQo4",
  authDomain: "jurident-9a928.firebaseapp.com",
  projectId: "jurident-9a928",
  storageBucket: "jurident-9a928.appspot.com",
  messagingSenderId: "305549263527",
  appId: "1:305549263527:web:1e08b00c34ef402bd3d182",
  measurementId: "G-1FQY6Y4Z6T"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

// Configure message handler
messaging.onBackgroundMessage((payload) => {
  console.log('Received background message:', payload);
  
  // Customize notification
  const notificationTitle = payload.notification?.title || 'New Message';
  const notificationOptions = {
    body: payload.notification?.body || 'You have a new notification',
    icon: '/logo192.png', // Use your app's icon
    data: payload.data || {} // Preserve payload data
  };

  // Show notification
  return self.registration.showNotification(
    notificationTitle,
    notificationOptions
  );
});

// Handle notification clicks
self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  
  // Handle navigation based on data
  if (event.notification.data.url) {
    clients.openWindow(event.notification.data.url);
  }
});