import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.17.0/firebase-app.js';
import { getFirestore, doc, setDoc, getDoc, updateDoc } from 'https://www.gstatic.com/firebasejs/9.17.0/firebase-firestore.js';

if (localStorage.getItem("uid") == null) {
    document.querySelector("body").innerHTML = "NOT ALLOWED";
    document.body.style.color = "white";
    console.log("uid hahahahhahhahahaha");
}

else
{
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

console.log("hi");
user_id = localStorage.getItem("uid");
user_name = localStorage.getItem("name");
var user_email = localStorage.getItem("email");
document.querySelector(".name").innerHTML = "Hey! " + user_name;
location = "user/" + user_id;
Data = doc(db, location);
var docSnap = await getDoc(Data);

if (docSnap.exists()) {
    console.log("User exists");
} 

else {
    const docData = {
        "Name": user_name,
        "slot_0": false,
        "slot_1": false,
        "slot_2": false,
        "slot_3": false,
        "slot_4": false,
        "slot_5": false,
        "slot_6": false,
        "slot_7": false,
        "slot_8": false,
        "slot_9": false,
    }
    
    setDoc(Data, docData, { merge: true });
}

const Form = document.querySelector('form');

Form.onsubmit = function (event) {
    event.preventDefault();
    var arr = {};
    var data = new FormData(Form);
    data.append("name", user_name);
    data.append("email", user_email);
    
    for (const item of data) {
        console.log(item[0], item[1]);
        arr[item[0]] = item[1];
    }

    $.post("/payment",
        {
            data: arr,
        },
        function (data, status) {
            // window.location = data;
            var arr = data.val[1];
            var url = data.link;
            for (let i = 0; i < arr.length; i++) {
                var location = "slots/slot_" + arr[i][0];
                var data = doc(db, location);
                const docData = {
                    "Slot_number": Number(arr[i][0])
                }
                
                setDoc(data, docData, { merge: true });
            }
            
            location = "user/" + user_id;
            data = doc(db, location);
            const docData = {};

            for (let i = 0; i < arr.length; i++) {
                docData["slot_"+(Number(arr[i][0]))] = "true";
                if (arr[i][0] == 8 || arr[i][0] == 9) {
                    break;
                }
            }
                
            updateDoc(data, docData);
            console.log(data);
            window.location = url;
        }
    )

}

}
