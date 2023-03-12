import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.17.0/firebase-app.js';
import { getFirestore, doc, setDoc, getDoc, updateDoc, deleteDoc } from 'https://www.gstatic.com/firebasejs/9.17.0/firebase-firestore.js';

if (localStorage.getItem("uid") == null) {
    document.querySelector("body").innerHTML = "NOT ALLOWED";
    document.body.style.color = "white";
    console.log("uid hahahahhahhahahaha");
    window.location = '/';
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
    

    $.post("/payment",
        {
            data: arr,
        },
        function (data, status) {
            var url = data.link;
            console.log(data);
            event.preventDefault();
            var arr = {};
            var lst = new Array();
            var data = new FormData(Form);
            for (const item of data) {
                console.log(item[0], item[1]);
                lst.push(item[1]);
                localStorage.setItem("Slot_number"+item[1][0], item[1]);
            }

            data.append("name", user_name);
            data.append("email", user_email);

            for (const item of data) {
                console.log(item[0], item[1]);
            }
            arr["slots"] = lst;
            arr["name"] = user_name;
            arr["email"] = user_email;
            
            console.log(arr);
            
            window.location = url;
        }
    )

}

}
