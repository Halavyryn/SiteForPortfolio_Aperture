const hamburger = document.querySelector(".hamburger");
const Menu = document.querySelector(".menu");

hamburger.addEventListener("click",()=>{
    hamburger.classList.toggle("hamburger_active");
    Menu.classList.toggle("menu_active");
})

document.querySelectorAll(".nav-link").forEach(n =>
    n.addEventListener("click",()=>{
        hamburger.classList.remove("hamburger_active");
        Menu.classList.remove("menu_active");
    }))