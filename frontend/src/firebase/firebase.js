import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD00gumMCzqjm7fghDIDec12dev9JcEN3A",
  authDomain: "mychatapp-a06f1.firebaseapp.com",
  projectId: "mychatapp-a06f1",
  storageBucket: "mychatapp-a06f1.appspot.com",
  messagingSenderId: "887942884612",
  appId: "1:887942884612:web:72e7f9bafad73708fcb451",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };
