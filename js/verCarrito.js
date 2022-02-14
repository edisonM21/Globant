export function verCarrito(carrito){
    let modalVerCarrito = new bootstrap.Modal(document.getElementById('modalVerCarrito'))

    let contenedor=document.getElementById("contenedorCarrito")
    contenedor.innerHTML=""
    
    let subtotales=[]

    carrito.forEach(function(producto){

        let fila=document.createElement("div")
        fila.classList.add("row")

        let columna1=document.createElement("div")
        columna1.classList.add("col-12")
        columna1.classList.add("col-md-4")

        let columna2=document.createElement("div")
        columna2.classList.add("col-12")
        columna2.classList.add("col-md-8")

        let fotoProducto=document.createElement("img")
        fotoProducto.classList.add("img-fluid")
        fotoProducto.classList.add("w-100")
        fotoProducto.src=producto.foto

        let nombreProducto=document.createElement("h4")
        nombreProducto.classList.add("text-center")
        nombreProducto.textContent=producto.nombre

        let precioProducto=document.createElement("h5")
        precioProducto.classList.add("text-center")
        precioProducto.textContent="Precio: "+producto.precio

        let cantidadProducto=document.createElement("h6")
        cantidadProducto.classList.add("text-center")
        cantidadProducto.textContent="Unidad: "+producto.cantidad
        
        let subtotal=document.createElement("h5")
        subtotal.classList.add("text-center")
        subtotal.textContent="Subtotal: "+producto.cantidad*producto.precio



        
        columna1.appendChild(fotoProducto)
        fila.appendChild(columna1)
        fila.appendChild(columna2) 
        fila.appendChild(columna2)
        columna2.appendChild(nombreProducto)
        columna2.appendChild(precioProducto)
        columna2.appendChild(cantidadProducto)
        columna2.appendChild(subtotal)



        contenedor.appendChild(fila)
        subtotales.push(producto.cantidad*producto.precio)

    })

    
        let total=0
        subtotales.forEach(subtotal=>{
            total=total+subtotal
        })
        





    modalVerCarrito.show()
    let botonLimpiarCarrito=document.getElementById("limpiar")
    botonLimpiarCarrito.addEventListener("click",function(){     
        contenedor.innerHTML=""
        pildora.innerHTML=""
        carrito.length=0
        valortotal.innerHTML=""
    })  

    let valortotal=document.getElementById("total")
    valortotal.textContent="Total:"+total
    console.log(valortotal)

    let convertir=document.getElementById("convertir")
    convertir.addEventListener("click",function(){
        total=total*0.00025
        valortotal.textContent="Total: "+total + " USD"
        
    })
    let mensajecompra = document.getElementById("mensajecompra")
    let modalcompra=new bootstrap.Modal(document.getElementById('modalcompra'))

    let comprar=document.getElementById("comprar")
    comprar.addEventListener("click",function(event){
      event.preventDefault()

  mensajecompra.textContent="Felicidades por tu compra"
  modalcompra.show()
  contenedor.innerHTML=""
  valortotal.innerHTML=""
  pildora.innerHTML=""
  carrito.length=0
  modalVerCarrito.hide()
  console.log()

    })




}