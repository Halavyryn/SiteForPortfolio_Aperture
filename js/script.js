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

/*Popup for menu*/
let popup = document.getElementById("popup");
let text='';
function openPopup(text){
    popup.classList.add("open-popup");
    popup.innerHTML = '<h2>'+text+'</h2><p>Sorry! Page under construction!</p><button type="button" onclick="closePopup()">OK</button>';
        /*'<h2 class="success">'+text+'</h2>'*/
}
function closePopup(){
    popup.classList.remove("open-popup");
}

