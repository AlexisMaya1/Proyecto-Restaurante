export const mq930 = window.matchMedia('(max-width: 930px)'); 
 
export function mediaCupon(){
    const cupones = document.querySelectorAll(".cupon"); 
    
    if(mq930.matches){
        cupones.forEach(element => {
            element.innerHTML = `<button class='btn-cupon'> Cupon </button>`
        });
    }else{
        cupones.forEach(element => {
            element.innerHTML = `<img src="./Imagenes/cupon2.jpeg" alt="cupon">`
        });
    }
     
  
}

