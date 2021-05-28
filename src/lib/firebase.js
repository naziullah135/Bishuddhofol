import firebase from "firebase/app";
import "firebase/analytics";
import "firebase/auth";

const app = firebase.initializeApp({
    apiKey: "AIzaSyAwWMte6JtxxzmVlAvFvFXcEJYrqDIG6os",
    authDomain: "rupai-bazar.firebaseapp.com",
    projectId: "rupai-bazar",
    storageBucket: "rupai-bazar.appspot.com",
    messagingSenderId: "516817418801",
    appId: "1:516817418801:web:50e25a7ff5ca3d5a5cb310",
    measurementId: "G-DSFZHBCTR0"
});

export const auth = app.auth();
export const googleProvider = new firebase.auth.GoogleAuthProvider();
export default app;