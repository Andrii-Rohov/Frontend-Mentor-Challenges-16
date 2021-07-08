let menuButton = document.querySelector("#menu-bars");
let menu = document.querySelector("#navbar");
let body = document.querySelector("#body");

menuButton.addEventListener("click", function() {
    menu.classList.toggle("hide");
    menu.classList.toggle("show");
    menuButton.classList.toggle("rotation");

});

body.addEventListener("click", function(){
    if(event.target != menuButton && event.target != menu) {
        menu.classList.add("hide");
        menu.classList.remove("show");
        menuButton.classList.remove("rotation");
    }
    
    
});