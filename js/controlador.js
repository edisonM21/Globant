import {llenarTienda} from "./llenarTienda.js"
import {ampliarInfo} from "./ampliarInfo.js"

llenarTienda()


let modalinfo = new bootstrap.Modal(document.getElementById('modalinfo'))

let listaProducto=document.getElementById("fila")
listaProducto.addEventListener("click",function(event){

    ampliarInfo(event)
    modalinfo.show()
})