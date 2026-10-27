const productos = [
   "assets/productosGaleria/androide19Vegeta.jpg", 
   "assets/productosGaleria/cajaStickers.png",
   "assets/productosGaleria/cellFase1.jpg",
   "assets/productosGaleria/deckBoxPokemon.png",
   "assets/productosGaleria/evilBoo.jpg",
   "assets/productosGaleria/freezerTrunks2.jpg",
   "assets/productosGaleria/janemba.jpg",
   "assets/productosGaleria/janemba2.jpg",
   "assets/productosGaleria/llaveros.jpg",
   "assets/productosGaleria/mayordomoBulldog.jpg",
   "assets/productosGaleria/sopMandoPS5GTA6.webp",
   "assets/productosGaleria/soporteMandosPS5.png",
   "assets/productosGaleria/todasFiguras.jpg"
];

let imgActual = 0;

const imagenProducto = document.getElementById("imgCarrusel");
const botonAnterior = document.getElementById("anterior");
const botonSiguiente = document.getElementById("siguiente");

const mostrarFoto = (i) => {
    imagenProducto.src = productos[i];
}

botonAnterior.addEventListener("click", () => {
    imgActual --;
    if (imgActual<0) {
    imgActual = productos.length -1;
    }
    mostrarFoto(imgActual);
});

botonSiguiente.addEventListener("click", () =>{
    imgActual++;
    if (imgActual>=productos.length) {
        imgActual = 0;
    }
    mostrarFoto(imgActual);
})

mostrarFoto(imgActual);