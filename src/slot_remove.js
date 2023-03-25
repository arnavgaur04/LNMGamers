import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.17.0/firebase-app.js';
import { getFirestore, doc, updateDoc, setDoc } from 'https://www.gstatic.com/firebasejs/9.17.0/firebase-firestore.js';

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
        if (index == 8) {
            arr.push(localStorage.getItem("Slot_number" + index));
            arr.push("9 1");
            break;
        }

        else if(index == 9)
        {
            arr.push(localStorage.getItem("Slot_number" + index));
            arr.push("8 1");
            break;
        }
    }
}

var user_name = localStorage.getItem("name")
var user_id = localStorage.getItem("uid")
var date = localStorage.getItem("date");

for (let i = 0; i < arr.length; i++) {
    var location = "slots/" + date + "/slots/slot_" + arr[i][0];
    var data = doc(db, location);
    const docData = {
        "Slot_number": Number(arr[i][0]),
        "Name": user_name
    }
    var slot = "Slot_number" + arr[i][0];
    localStorage.setItem(slot, arr[i])
    setDoc(data, docData, { merge: true });
}

var location = "user/" + user_id;
var data = doc(db, location);
var docData = {};
for (let i = 0; i < arr.length; i++) {
    docData["slot_"+(Number(arr[i][0]))] = date;
    if (arr[i][0] == 8 || arr[i][0] == 9) {
        break;
    }
}
    
updateDoc(data, docData);    


