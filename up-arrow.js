export default function ArrowUp() {
   let $boton = document.querySelector(".up-arrow"); 


    $boton.addEventListener("click", e =>{
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    console.log(window.scrollY); 
})

document.addEventListener("scroll", e =>{
    if(window.scrollY < 800){
        $boton.classList.add("show-bottom"); 
    }else{
        $boton.classList.remove("show-bottom");
    }
})

}


