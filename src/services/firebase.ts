import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyD_FZ2yaKKYuaThokUAjfTNsZEW-JQC9yQ",
    authDomain: "rpg-dice-1d23c.firebaseapp.com",
    databaseURL: "https://rpg-dice-1d23c.firebaseio.com",
    projectId: "rpg-dice-1d23c",
    storageBucket: "rpg-dice-1d23c.appspot.com",
    messagingSenderId: "263177669502",
    appId: "1:263177669502:web:fe5a229a52ebf393ed412f",
    measurementId: "G-BJ1QBBX2PJ"
};

firebase.initializeApp(firebaseConfig);
export default firebase;