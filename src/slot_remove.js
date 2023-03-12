import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.17.0/firebase-app.js';
import { getFirestore, doc, updateDoc } from 'https://www.gstatic.com/firebasejs/9.17.0/firebase-firestore.js';

var arr = new Array();

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

for (let index = 0; index < 10; index++) {
    if (localStorage.getItem("Slot_number" + index) != null) {
        arr.push(localStorage.getItem("Slot_number" + index));
    }
}

for (let i = 0; i < arr.length; i++) {
    var location = "slots/slot_" + arr[i][0];
    var data = doc(db, location);
    const docData = {
        "Slot_number": Number(arr[i][0]),
        "Name": user_name
    }
    var slot = "Slot_number" + arr[i][0];
    localStorage.setItem(slot, arr[i])
    setDoc(data, docData, { merge: true });
}

location = "user/" + user_id;
data = doc(db, location);
const docData = {};

for (let i = 0; i < arr.length; i++) {
    docData["slot_"+(Number(arr[i][0]))] = document.querySelector('.date').innerHTML;
    if (arr[i][0] == 8 || arr[i][0] == 9) {
        break;
    }
}
    
updateDoc(data, docData);    


