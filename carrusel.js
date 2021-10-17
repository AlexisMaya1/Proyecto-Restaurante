

 function Carrusel (){

let imagenes = ["/Imagenes/carrusel1.jpg", "/Imagenes/carrusel2.jpg",
 "/Imagenes/carrusel3.jpg", "/Imagenes/carrusel4.jpg"];
let count = 0; 
let i = 0; 
let contenedor = document.querySelector(".carrusel")

contenedor.addEventListener("click", e => {

    let atras = contenedor.querySelector(".left");
    let atrasContenido = document.getElementById("flecha-izquierda"); 
    let adelante = contenedor.querySelector(".right");
    let adelanteContenido = document.getElementById("flecha-derecha") 
    let img = contenedor.querySelector("img"); 
    let target = e.target; 

    if(target == atras || target == atrasContenido){

        if(count > 0){
            img.src = imagenes[count-1]; 
            count--; 
        }else{
            img.src = imagenes[imagenes.length - 1];
            count = imagenes.length - 1;  
        }

    }else if(target == adelante || target == adelanteContenido){
        if(count < imagenes.length - 1){
            img.src = imagenes[count+1]; 
            count++; 
        }else{
            img.src = imagenes[0];
            count = 0;  
        }
    }

    })
}


// Carrusel Automatico


const imagen = document.querySelector(".img-carrusel");

const  carruselAuto = ()=> {
     
    
    imagen.src = imagenes[i]; 
    i = (i < imagenes.length - 1) ? i+1:0; 

}
    const interval = ()=> {
        setInterval(carruselAuto,2000); 
}


export {Carrusel}; 