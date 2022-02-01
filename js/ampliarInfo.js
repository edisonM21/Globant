export function ampliarInfo(event){

    let producto={}

    if(event.target.classList.contains("btn")){

         producto={
            foto:event.target.parentElement.querySelector("img").src,
            nombre:event.target.parentElement.querySelector("h4").textContent,
            precio:event.target.parentElement.querySelector("h5").textContent
        }

        let etiquetaNombreProducto=document.getElementById("nombreProducto")
        etiquetaNombreProducto.textContent=producto.nombre

        let etiquetaPrecio=document.getElementById("precioProducto")
        etiquetaPrecio.textContent=producto.precio

        let etiquetaImagen=document.getElementById("imagenProducto")
        etiquetaImagen.src=producto.foto

        return(producto)

    }
}