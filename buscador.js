
export default function buscador() {
const d = document; 
const $lupa = d.querySelector(".lupa");
const $texto = d.querySelector(".input-Texto"); 


function desplegar(){
    $lupa.addEventListener("mouseover", ()=>{
        $texto.classList.remove("input-Texto"); 
    })
}

function esconder(){
    $lupa.addEventListener("click", ()=>{
        $texto.classList.add("input-Texto"); 
    })
}

d.addEventListener("DOMContentLoaded", ()=>{
    desplegar(); 
    esconder(); 
})

}
    


