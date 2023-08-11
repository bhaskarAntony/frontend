import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
    apiKey: "AIzaSyBHhONEe_M5XFKQ4zgjHOq9gxPgElbyoCU",
    authDomain: "chat-9ffd9.firebaseapp.com",
    databaseURL: "https://chat-9ffd9-default-rtdb.firebaseio.com",
    projectId: "chat-9ffd9",
    storageBucket: "chat-9ffd9.appspot.com",
    messagingSenderId: "354408759526",
    appId: "1:354408759526:web:04d2ca683ad8601866fb27",
    measurementId: "G-TM2MNXQSSD"
  };
  const app = initializeApp(firebaseConfig);
//   const analytics = getAnalytics(app);
  export default app;