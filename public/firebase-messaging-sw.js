importScripts('https://www.gstatic.com/firebasejs/9.8.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.8.1/firebase-messaging-compat.js');

const firebaseConfig = {
  apiKey: "AIzaSyCO0VasuBzGS74ONUmtMKrktKddF58DIS8",
  authDomain: "akino-61bc9.firebaseapp.com",
  projectId: "akino-61bc9",
  storageBucket: "akino-61bc9.appspot.com",
  messagingSenderId: "643793608275",
  appId: "1:643793608275:web:b6dcca5445ef7873e8f0a6",
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function (payload) {
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: 'https://park-akino.ru/assets/favicon.ico',
  };

  self.registration.showNotification(notificationTitle,
    notificationOptions).finally();
});
