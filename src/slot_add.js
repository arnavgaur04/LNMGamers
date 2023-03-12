import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.17.0/firebase-app.js';
import { getFirestore, doc, setDoc, updateDoc, deleteDoc } from 'https://www.gstatic.com/firebasejs/9.17.0/firebase-firestore.js';

const firebaseApp = initializeApp({
    apiKey: "AIzaSyDLoZhE6AwmQKH-6X12-behouwg5GlOiI8",
    authDomain: "lnmgamers-87e3f.firebaseapp.com",
    projectId: "lnmgamers-87e3f",
    storageBucket: "lnmgamers-87e3f.appspot.com",
    messagingSenderId: "523545220157",
    appId: "1:523545220157:web:73a7c820be2dcce9e34654",
    measurementId: "G-B0LR1965GE"
})

console.log("hi");
const db = getFirestore(firebaseApp);

var arr = new Array();

for (let index = 0; index < 10; index++) {
    if (localStorage.getItem("Slot_number" + index) != null) {
        arr.push(localStorage.getItem("Slot_number" + index));
    }    
}
for (let i = 0; i < arr.length; i++) {
    await deleteDoc(doc(db, "slots", "slot_"+arr[i][0]));
    localStorage.removeItem("Slot_number" + index)
}



