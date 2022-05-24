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
  const app = initializeApp(firebaseConfig);
  const messaging = firebase.messaging();

  messaging.onMessage(function(payload) {

    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
        icon: 'https://a-static.besthdwallpaper.com/simpatichni-sire-koshenya-v-koshiku-shpalery-2048x1152-26674_49.jpg',        
    };

    if (!("Notification" in window)) {
        console.log("This browser does not support system notifications.");
    } else if (Notification.permission === "granted") {

      const notification = new Notification(notificationTitle,notificationOptions);
        notification.onclick = function(event) {
            event.preventDefault();
            notification.close();
        }
    }

});

  // messaging.onBackgroundMessage(function (payload) {
  //   const notificationTitle = payload.notification.title;
  //   const notificationOptions = {
  //     body: payload.notification.title,
  //   };

  //   self.registration.showNotification(notificationTitle,
  //     notificationOptions).finally();
  // });

  // self.addEventListener('push', () => {
  //   console.log("push event");
  //   // event.waitUntil(
  //   //   self.registration.showNotification(data.title, {
  //   //     body: data.content
  //   //   })
  //   // );
  // });

}
