import firebase from "firebase/app";
import "firebase/auth";

export const auth =firebase.initializeApp( {
    apiKey: "AIzaSyCaATCKjkiQoUzpB1e_y4IHq_OxbmMDC-M",
    authDomain: "unichat-c707f.firebaseapp.com",
    projectId: "unichat-c707f",
    storageBucket: "unichat-c707f.appspot.com",
    messagingSenderId: "443433825846",
    appId: "1:443433825846:web:5bf85343223274ce3b4a97"
}).auth();