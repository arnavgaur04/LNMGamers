import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.17.0/firebase-app.js';
import { getFirestore, doc, setDoc, getDoc } from 'https://www.gstatic.com/firebasejs/9.17.0/firebase-firestore.js';
var user_id, user_name, location, Data;
const firebaseApp = initializeApp({
    apiKey: "AIzaSyDLoZhE6AwmQKH-6X12-behouwg5GlOiI8",
    authDomain: "lnmgamers-87e3f.firebaseapp.com",
    projectId: "lnmgamers-87e3f",
    storageBucket: "lnmgamers-87e3f.appspot.com",
    messagingSenderId: "523545220157",
    appId: "1:523545220157:web:73a7c820be2dcce9e34654",
    measurementId: "G-B0LR1965GE"
})

const db = getFirestore(firebaseApp);

$.post("/user",
    async function(data, status){
        console.log("hi");
        user_id = data.user_info[1];
        user_name = data.user_info[0];
        location = "user/" + user_id;
        Data = doc(db, location);
        var docSnap = await getDoc(Data);
        
        if (docSnap.exists()) {
            console.log("User exists");
        } 
        
        else {
            const docData = {
                "Name": user_name,
                "slot_1": false,
                "slot_2": false,
                "slot_3": false,
                "slot_4": false,
                "slot_5": false,
                "slot_6": false,
                "slot_7": false,
                "slot_8": false,
                "slot_9": false,
                "slot_10": false,
            }
            
            setDoc(Data, docData, { merge: true });
        }
});

