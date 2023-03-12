import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.17.0/firebase-app.js';
import { getAuth, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signOut } from 'https://www.gstatic.com/firebasejs/9.17.0/firebase-auth.js';

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
onAuthStateChanged(auth, user=>{
    if (user != null) {
        console.log("user signed in");
        localStorage.setItem("uid",user.uid);
        localStorage.setItem("name",user.displayName);
        localStorage.setItem("email",user.email);
        location.href = "/main";
    }

    else
    {
        console.log("No user");
        // location.href = "/";
    }
})

const google_btn = document.querySelector(".google");

google_btn.addEventListener("click", function(){
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
      }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
      });
})





