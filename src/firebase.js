import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAu3o2oppJsdAiN_h6XRiZOmSytC8L2_3k",
  authDomain: "chat-clone-15efb.firebaseapp.com",
  projectId: "chat-clone-15efb",
  storageBucket: "chat-clone-15efb.appspot.com",
  messagingSenderId: "62327614674",
  appId: "1:62327614674:web:5922b4024ab2db0802510b",
  measurementId: "G-R6FDYB1X5C"
};

export const app = initializeApp(firebaseConfig);
