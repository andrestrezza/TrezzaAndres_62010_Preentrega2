
class Producto {
    constructor (nombre, detalle, precio, imagenPath){
    this.nombre = nombre
    this.detalle = detalle
    this.precio = precio
    this.imagenPath = imagenPath
}
}

const listaDeProductos = [
    new Producto("MEDIAS 3/4", "Medias antideslizantes 3/4", "$ 11.000","imagenes/Medias 3.png"),
    new Producto("MEDIAS 2/4", "Medias antideslizantes 2/4", "$ 10.000","imagenes/Medias 2.png"),
    new Producto("SOQUETES", "Soquetes antideslizantes", "$ 9.000","imagenes/Soquetes.png"),
    new Producto("PANTORRILLERAS", "Pantorrillera", "$ 8.500","imagenes/Pantorrillera.png"),
    new Producto("CANILLERAS", "Canilleras", "$ 10.000","imagenes/canilleras.png")
];

const productosDiv = document.getElementById("productos")

listaDeProductos.forEach (e => {
productosDiv.innerHTML += `<div class="producto">
<h3>${e.nombre}</h3>
<img src="${e.imagenPath}" alt =""> 
<p>${e.detalle}</p>
<p class = "precio" >${e.precio}</p>
<button>Comprar</button>

</div>`

})

const botonDark = document.getElementById("botonDark");
const body = document.body

let modoDark = localStorage.getItem("dark")

if(modoDark==null){
    localStorage.setItem("dark", "off")
}else{
    if(modoDark == "on"){
        body.classList.add("bodyDark")
    }
}


botonDark.addEventListener("click", ()=>{
    body.classList.toggle("bodyDark")

    if(body.classList.contains("bodyDark")){
        localStorage.setItem("dark", "on")
    }else{
        localStorage.setItem("dark", "off")
    }
})

  