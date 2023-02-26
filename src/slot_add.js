import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.17.0/firebase-app.js';
import { getFirestore, doc, setDoc } from 'https://www.gstatic.com/firebasejs/9.17.0/firebase-firestore.js';

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

$.post("/success",
    function(data, status){
        console.log(data.val[1]);
        var arr = data.val[1];

        for (let i = 0; i < arr.length; i++) {
            var location = "slots/slot_" + arr[i][0];
            var data = doc(db, location);
            const docData = {
                "Slot_number": Number(arr[i][0])
            }
            
            setDoc(data, docData, { merge: true });
            console.log(data.id);
        }

});




// try {
//     const docRef = await addDoc(collection(db, "test"), {
//       first: "Ada",
//       last: "Lovelace",
//       born: 1815
//     });
//     console.log("Document written with ID: ", docRef.id);
//   } catch (e) {
//     console.error("Error adding document: ", e);
//   }





