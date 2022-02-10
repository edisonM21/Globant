import {getAuth, createUserWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/9.6.6/firebase-auth.js"

let botonRegistro=document.getElementById("botonRegistro")

let modalLogin=new bootstrap.Modal(document.getElementById('modallogin'))

let mensajeLogin=document.getElementById("mensajeLogin")

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
    mensajeLogin.textContent="EXITO EN EL REGISTRO"
    modalLogin.show()
    console.log()
   })
    .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
    mensajeLogin.textContent=`Error: ${errorCode} : ${errorMessage}`
    modalLogin.show()
    console.log("error")
  });

})