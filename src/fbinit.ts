import { initializeApp } from "firebase/app";

const firebaseConfig = {
  databaseURL: "https://laundry-watcher-default-rtdb.firebaseio.com/",
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
