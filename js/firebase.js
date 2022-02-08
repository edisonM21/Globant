 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-app.js";
 import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-analytics.js";
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 // For Firebase JS SDK v7.20.0 and later, measurementId is optional
 const firebaseConfig = {
   apiKey: "AIzaSyC9Kqt3dTihGTTxVNniBBt_7w0mVMnMRCY",
   authDomain: "asdfghjk-4ee04.firebaseapp.com",
   projectId: "asdfghjk-4ee04",
   storageBucket: "asdfghjk-4ee04.appspot.com",
   messagingSenderId: "473332069268",
   appId: "1:473332069268:web:eba6419f24d704a54c5581",
   measurementId: "G-LLJTD7Z9WF"
 };

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const analytics = getAnalytics(app);