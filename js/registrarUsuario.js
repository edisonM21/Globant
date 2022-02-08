import {getAuth, createUserWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/9.6.6/firebase-auth.js"

let botonRegistro=document.getElementById("botonRegistro")
botonRegistro.addEventListener("click",function(event){
    event.preventDefault()
    
    let email=document.getElementById("cajaEmail").value
    let password=document.getElementById("cajaPassword").value

    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    // ...
    console.log("locotaaaaaaaaaaa")
   })
    .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
    console.log("error")
  });
})