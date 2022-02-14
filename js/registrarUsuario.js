import {getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/9.6.6/firebase-auth.js"

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
let mensajeInicio = document.getElementById("mensajeInicio")
let modalInicio=new bootstrap.Modal(document.getElementById('modalInicio'))


let botonIniciar=document.getElementById("botonInicio")
botonIniciar.addEventListener("click",function(event){
  event.preventDefault()
    
  let email=document.getElementById("cajaEmail").value
  let password=document.getElementById("cajaPassword").value

  const auth = getAuth();
  signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
  // Signed in
  const user = userCredential.user;
  // ...
  mensajeInicio.textContent="Felicidades has iniciado sesion"
  modalInicio.show()
  console.log()
 })
  .catch((error) => {
  const errorCode = error.code;
  const errorMessage = error.message;
  // ..
  mensajeInicio.textContent=`Error: ${errorCode} : ${errorMessage}`
  modalInicio.show()
  console.log("error")
});
  
})