const toggleMenu = document.querySelector(".toggleContainer")
const hamburgerMenu = document.querySelector(".hamburgerMenu")
let screenSize = window.innerWidth;
hamburgerMenu.addEventListener("click", () => toggleMenu.classList.toggle("closed"))

if(screenSize > 750){
    toggleMenu.classList.remove("mobile")
    toggleMenu.classList.add("desktop")
} else{
    toggleMenu.classList.remove("desktop")
    toggleMenu.classList.add("mobile")
}


