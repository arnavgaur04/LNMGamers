import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.17.0/firebase-app.js';
import { getAuth, GoogleAuthProvider, signOut } from 'https://www.gstatic.com/firebasejs/9.17.0/firebase-auth.js';


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
const auth = getAuth(firebaseApp);
const provider = new GoogleAuthProvider(firebaseApp);
const signout_btn = document.querySelector(".signout");

signout_btn.addEventListener("click", function(){
    signOut(auth).then(() => {
        // Sign-out successful.
        console.log("signed out.");
        localStorage.clear();
        location.href = "/"
      }).catch((error) => {
        // An error happened.
        console.log("error");
      });
})

}


