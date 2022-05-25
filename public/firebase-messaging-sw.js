importScripts('https://www.gstatic.com/firebasejs/9.8.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.8.1/firebase-messaging-compat.js');

function initializeApp() {
  const firebaseConfig = {
    apiKey: "AIzaSyCO0VasuBzGS74ONUmtMKrktKddF58DIS8",
    authDomain: "akino-61bc9.firebaseapp.com",
    projectId: "akino-61bc9",
    storageBucket: "akino-61bc9.appspot.com",
    messagingSenderId: "643793608275",
    appId: "1:643793608275:web:b6dcca5445ef7873e8f0a6",
  };
  console.log("inside sw")
  const app = initializeApp(firebaseConfig);
  const messaging = firebase.messaging();

  onMessage(messaging, (payload) => {
    const title = payload.notification.title;
    console.log(payload)
    const notification = new Notification(title, {
      body: payload?.notification?.body,
      icon: 'https://park-akino.ru/assets/favicon.ico',
    });
    return notification;
  });

  messaging.onMessage((payload) => {
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
      body: payload.notification.body,
      icon: 'https://park-akino.ru/assets/favicon.ico',
    };

    console.log("onMessage")
    if (!("Notification" in window)) {
      console.log("This browser does not support system notifications.");
    } else {

      const notification = new Notification(notificationTitle, notificationOptions);
      notification.onclick = function (event) {
        event.preventDefault();
        notification.close();
      }

      return self.registration.showNotification(notificationTitle,
        notificationOptions).finally();
    }

  });

  onBackgroundMessage(messaging, (payload) => {
    console.log('[firebase-messaging-sw.js] Received background message ', payload);

    const notificationTitle = payload.notification.title;
    const notificationOptions = {
      body: payload.notification.body,
      icon: 'https://park-akino.ru/assets/favicon.ico',
    };
    const notification = new Notification(notificationTitle, notificationOptions);
    return self.registration.showNotification(notificationTitle,
      notificationOptions);
  });

  messaging.onBackgroundMessage(function (payload) {
    console.log("onBackground");
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
      body: payload.notification.body,
      icon: 'https://park-akino.ru/assets/favicon.ico',
    };

    return self.registration.showNotification(notificationTitle,
      notificationOptions).finally();
  });

  self.addEventListener('push', function (event) {
    console.log("push notification")
    //const promise = self.registration.showNotification('Push notification!');
    e.waitUntil(
      self.registration.showNotification('Hello world')
    );
});


};
