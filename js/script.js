/*for hhamburger menu*/
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
}
function closePopup(){
    popup.classList.remove("open-popup");
}


/*Button to top*/
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTo({ top: 0, behavior: "smooth" });// For Safari
    document.documentElement.scrollTo({ top: 0, behavior: "smooth" }); // For Chrome, Firefox, IE and Opera
}
