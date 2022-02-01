import {llenarTienda} from "./llenarTienda.js"
import {ampliarInfo} from "./ampliarInfo.js"
import {agregarCarrito} from "./agregarCarrito.js"


let producto={}
let carrito=[]

llenarTienda()


let modalinfo = new bootstrap.Modal(document.getElementById('modalinfo'))

let listaProducto=document.getElementById("fila")
listaProducto.addEventListener("click",function(event){

    producto=ampliarInfo(event)
    modalinfo.show()
})

let botonAgregar=document.getElementById("añadirAlcarrito")
botonAgregar.addEventListener("click",function(){

    let cantidadProducto=document.getElementById("cantidadProducto").value
    producto.cantidad=cantidadProducto

    carrito.push(producto)

    modalinfo.hide()

    agregarCarrito(carrito)
})













