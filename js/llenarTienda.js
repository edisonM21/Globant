export function llenarTienda(){
    let productos=[
        {Nombre:"Buso Capucha",Precio:22000,foto:"../img/buso-capucha.jpg",descripcion:"Buso de Atletico Naciional"},
        {Nombre:"Buso cierre",Precio:200000,foto:"../img/buso-cierre.jpg",descripcion:"Buso con cierre completo"},
        {Nombre:"Buso cuello",Precio:250000,foto:"../img/buso-cuello.jpg",descripcion:"Buso de cuello de tortuga"},
        {Nombre:"camiseta blanca",Precio:50000,foto:"../img/camiseta-blanca.jpg",descripcion:"Camiseta fondo blanco"},
        {Nombre:"camiseta dama",Precio:90000,foto:"../img/camiseta-dama.jpg",descripcion:"Camiseta original para mujer"},
        {Nombre:"camiseta Polo",Precio:75000,foto:"../img/camiseta-polo.jpg",descripcion:"Camiseta con cuello"},
        {Nombre:"camiseta negra",Precio:180000,foto:"../img/camiseta-negra.jpg",descripcion:"Camiseta negra con estampado"},
        {Nombre:"camiseta sam",Precio:300000,foto:"../img/camiseta-sam.jpg",descripcion:"Camisete Antigua y la original"},
        {Nombre:"Gorra",Precio:120000,foto:"../img/gorra.jpg",descripcion:"Gorra con escudo del nacional"},
        {Nombre:"sudadera entreno",Precio:160000,foto:"../img/sudadera-entreno.jpg",descripcion:"Sudadera de algodon"},

    ]
    //rutina para recorrer el arreglo y crear tarjetas

    let fila=document.getElementById("fila")

    productos.forEach(function(producto){
        let columna=document.createElement("div")
        columna.classList.add("col")

        let tarjeta=document.createElement("div")
        tarjeta.classList.add("card")
        tarjeta.classList.add("h-80")
        tarjeta.classList.add("text-center")
        tarjeta.classList.add("border-success")
        tarjeta.classList.add("mb-3")

        let imagen=document.createElement("img")
        imagen.classList.add("card-img-top")
        imagen.classList.add("p-3")
        imagen.classList.add("h-100")
        imagen.src=producto.foto

        let nombreProducto=document.createElement("h4")
        nombreProducto.textContent=producto.Nombre

        let Precio=document.createElement("h5")
        Precio.textContent="$"+producto.Precio

        let botonInformacion=document.createElement("button")
        botonInformacion.setAttribute("type","button")
        botonInformacion.classList.add("btn")
        botonInformacion.classList.add("btn-outline-dark")
        botonInformacion.classList.add("mx-3")
        botonInformacion.classList.add("mb-3")
        botonInformacion.classList.add("bg-success")
        botonInformacion.textContent="informacion producto"


        let raya=document.createElement("hr")
        raya.classList.add("w-50")
        raya.classList.add("mx-auto")
        raya.classList.add("d-block")
        raya.classList.add("bg-success")


        let descripcion=document.createElement("h6")
        descripcion.textContent=producto.descripcion
        
        tarjeta.appendChild(imagen)
        tarjeta.appendChild(raya)
        tarjeta.appendChild(nombreProducto)
        tarjeta.appendChild(Precio)
        tarjeta.appendChild(botonInformacion)

        columna.appendChild(tarjeta)
        fila.appendChild(columna)




    })


}