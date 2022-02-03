export function agregarCarrito(carrito){

    let pildora=document.getElementById("pildora")

    pildora.classList.remove("invisible")
    let contador=0
    carrito.forEach(function(producto){
        contador=(contador+ Number(producto.cantidad))

    });
    console.log(contador)

    pildora.textContent=contador

}