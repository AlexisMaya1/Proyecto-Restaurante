
import buscador from "./buscador.js";
import { Carrusel } from "./carrusel.js";
import imgModal from "./img-modal.js";
import { mediaCupon, mq930  } from "./media-cupon.js";
import menuMovil from "./menu-movil.js";
import cuentaRegresiva from "./proximamente.js";
import ArrowUp from "./up-arrow.js";



document.addEventListener("DOMContentLoaded", ()=> {
    Carrusel();
    cuentaRegresiva();
    imgModal();  
    menuMovil(); 
}); 

ArrowUp(".up-arrow");
buscador();
mq930.addListener(mediaCupon); 


