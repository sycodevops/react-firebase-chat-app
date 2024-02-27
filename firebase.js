import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCcP85hWJxvSgWWWjCnPTqVQrJiTJAAFZY",
  authDomain: "chat-app-sachin.firebaseapp.com",
  projectId: "chat-app-sachin",
  storageBucket: "chat-app-sachin.appspot.com",
  messagingSenderId: "84855079691",
  appId: "1:84855079691:web:362215e1d39f74f8c3180e",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
