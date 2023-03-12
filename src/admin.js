import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.17.0/firebase-app.js';
import { getFirestore, doc, getDoc, updateDoc, deleteDoc } from 'https://www.gstatic.com/firebasejs/9.17.0/firebase-firestore.js';

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

if (localStorage.getItem("uid") != "fltwjO5H2pc3vr4eoxFuzC5Dww23") {
    document.querySelector("body").innerHTML = "NOT ALLOWED"
}

else
{
    console.log("hi");
    const arr = ["10-11", "11-12", "12:30 - 1:30", "1:45 - 2:45", "3-4", "4:15 - 5:15", "5:30 - 6:30", "6:45 - 7:45", "8-9", "8-10"]
    for (let index = 0; index < 10; index++) {
        var slot = "slot_" + index;
        var docRef = doc(db, "slots", slot);
        var docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            console.log("Document data: " + docSnap.data().Slot_number);
            var node = document.createElement("li");
            const textnode = document.createTextNode(arr[docSnap.data().Slot_number] + "   " + docSnap.data().Name);
            node.appendChild(textnode);
            document.getElementById("myList").appendChild(node);
        } else {
          console.log("No such document!");
        }
    }
}