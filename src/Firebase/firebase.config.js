// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: 'AIzaSyBz1uChVOzKpiTelN4-syoYpMYWM0yVyFk',
//   authDomain: import.meta.env.VITE_AUTHDOMAIN,
//   projectId: import.meta.env.VITE_PROJECTID,
//   storageBucket: import.meta.env.VITE_STORAGEBUCKET,
//   messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,
//   appId: import.meta.env.VITE_APPID
// };
const firebaseConfig = {
  apiKey: "AIzaSyBz1uChVOzKpiTelN4-syoYpMYWM0yVyFk",
  authDomain: "chef-recipe-hunter-fb30a.firebaseapp.com",
  projectId: "chef-recipe-hunter-fb30a",
  storageBucket: "chef-recipe-hunter-fb30a.appspot.com",
  messagingSenderId: "1081342553040",
  appId: "1:1081342553040:web:41e6f7076933b60143e7d5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app