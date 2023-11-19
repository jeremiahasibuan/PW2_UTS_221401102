let darkmode        = document.getElementById("darkmode");
let mainCarousel    = document.getElementById("mainCarousel"); 
let pdarkmode       = document.getElementById("pdarkmode");
let plightmode      = document.getElementById("plightmode");
let card1           = document.getElementById("card1");
let card2           = document.getElementById("card2");
let card123         = document.getElementById("card123");

let body            = document.body;
let lightMode       = 1;
function darkMode(){
    lightMode +=1
    
    if(lightMode % 2 != 0){
        body.classList.remove("dark");
        mainCarousel.style.display  ="none";
        darkmode.textContent        =`MODE DARK`;
        plightmode.style.display    ="block";
        pdarkmode.style.display     ="none";
        card1.style.backgroundColor  ="white";
        card2.style.backgroundColor  ="white";
        card123.style.color         ="black";
    }
    if(lightMode % 2 == 0 ){
        body.classList.toggle("dark")
        mainCarousel.style.display  ="none";
        pdarkmode.style.display     ="block";
        plightmode.style.display    ="none";
        darkmode.textContent        =`MODE LIGHT`;
        card1.style.backgroundColor  ="black";
        card2.style.backgroundColor  ="black";
        card123.style.color         ="white";
    }
}