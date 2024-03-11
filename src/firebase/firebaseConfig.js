import firebase from 'firebase/app'
import "firebase/database"


const firebaseConfig = {
    apiKey: "AIzaSyBOFxanagnNmJh-9dRfuLSNkgPH_MwUUUA",
    authDomain: "deneme-e91cd.firebaseapp.com",
    databaseURL: "https://deneme-e91cd-default-rtdb.firebaseio.com",
    projectId: "deneme-e91cd",
    storageBucket: "deneme-e91cd.appspot.com",
    messagingSenderId: "888150807903",
    appId: "1:888150807903:web:5d48ea4b7f0390b821d2ea"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);

firebase.initializeApp(firebaseConfig)

const database = firebase.database()


export default database