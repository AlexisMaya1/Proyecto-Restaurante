


export default function cuentaRegresiva (){
 setInterval(() => {
    let fechafutura = new Date("September 11, 2040 03:24:00").getTime();  
    let hoy = Date.now();
    let fechalimite = fechafutura - hoy; 
    let $restauranteProx = document.querySelector(".restaurante-prox");
   
    let años = Math.floor(fechalimite/(1000*60*60*24*365)); 
    let dias = Math.floor((fechalimite%(1000*60*60*24*365)) / (1000*60*60*24)); 
    let horas = Math.floor((fechalimite % (1000*60*60*24)) / (1000*60*60));
    let minutos = Math.floor((fechalimite %  (1000*60*60)) / (1000*60)); 
    let segundos = Math.floor(fechalimite % (1000*60) / (1000)); 

     $restauranteProx.innerHTML = `<h1> Proximamente</h1><h2> Faltan: ${años} años, ${dias} dias, ${horas} horas, ${minutos} minutos y
    ${segundos} segundos </h2>`; 
     
    
    if(fechafutura < hoy){
        $restauranteProx.innerHTML = "Felicidades"; 
    }

}, 1000);

}






