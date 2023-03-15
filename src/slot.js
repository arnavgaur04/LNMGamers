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

$("a").click(async function()
{
    var dropbtn = document.querySelector(".dropbtn");
    dropbtn.innerHTML = this.innerHTML;

    for (let index = 0; index < 10; index++) {
      var slot = dropbtn.innerHTML;
      var docRef = doc(db, "slots", slot, "slots", "slot_" + index);
      var docSnap = await getDoc(docRef);
  
      if (docSnap.exists()) {
        console.log("Document data: " + docSnap.data().Slot_number);
        document.querySelectorAll('.radio')[index].disabled = true;

      } else {
        console.log("No such document!");
        document.querySelectorAll('.radio')[index].disabled = false;
      }
    }
})


}

