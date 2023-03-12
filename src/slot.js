import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.17.0/firebase-app.js';
import { getFirestore, doc, getDoc } from 'https://www.gstatic.com/firebasejs/9.17.0/firebase-firestore.js';

if (localStorage.getItem("uid") == null) {
  document.querySelector("body").innerHTML = "NOT ALLOWED";
  console.log("uid hahahahhahhahahaha");
}

else 
{
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
    var slot = "slot_" + index;
    var docRef = doc(db, "slots", slot);
    var docSnap = await getDoc(docRef);

    if (localStorage.getItem("Slot_number" + index) != null) {
      await deleteDoc(doc(db, "slots", "slot_"+index));
      localStorage.removeItem("Slot_number" + index);
    }

    if (docSnap.exists()) {
      console.log("Document data: " + docSnap.data().Slot_number);
      document.querySelectorAll('.radio')[docSnap.data().Slot_number].disabled = true;
    } else {
      console.log("No such document!");
    }
  }

}

