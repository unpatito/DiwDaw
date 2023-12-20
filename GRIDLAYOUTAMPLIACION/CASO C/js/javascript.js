var enlaceMenu;
function iniciarMenu()
{
enlaceMenu = document.querySelector("div>a");
enlaceMenu.addEventListener("click", despliegaMenu, false);
}
function despliegaMenu()
{
document.querySelector(".item1").classList.toggle('desplegado');
}
window.addEventListener("load", iniciarMenu, false);