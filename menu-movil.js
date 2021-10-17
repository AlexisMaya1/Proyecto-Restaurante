
export default function menuMovil () {
const $menuHamburger = document.getElementById("hamburger"); 
const $mostrarAsideMenu = document.querySelector(".menu-movil"); 
const $cerrarAsideMenu = document.querySelector(".btn-cerrar"); 

$menuHamburger.addEventListener("click", ()=> {
    $mostrarAsideMenu.classList.add("mostrar-menu"); 
    $menuHamburger.classList.add("is-active"); 
})

$cerrarAsideMenu.addEventListener("click", () => {
    $mostrarAsideMenu.classList.remove("mostrar-menu"); 
    $menuHamburger.classList.remove("is-active"); 
})
}