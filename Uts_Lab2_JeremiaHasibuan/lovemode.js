let lovemode    = document.getElementById("lovemode");
let mainCarousel= document.getElementById("mainCarousel"); 
let plovemode   = document.getElementById("plovemode");
let psadmode   = document.getElementById("psadmode");
let card1           = document.getElementById("card1");
let card2           = document.getElementById("card2");
let card123         = document.getElementById("card123");
let body        = document.body;
let lightmode   = 1;
function loveMode(){
    lightmode +=1
    if(lightmode % 2 == 0){
        body.classList.remove("sad")
        body.classList.toggle("love")
        mainCarousel.style.display  ="none";
        psadmode.style.display    ="none";
        plovemode.style.display    ="block";
        lovemode.textContent        =`MODE SAD`;
        card1.style.backgroundColor  ="palevioletred";
        card2.style.backgroundColor  ="palevioletred";
        card123.style.color         ="red";
    }
    
    if(lightmode % 2 != 0){
        body.classList.remove("love")
        body.classList.toggle("sad")
        mainCarousel.style.display  ="none";
        plovemode.style.display    ="none";
        psadmode.style.display    ="block";
        lovemode.textContent        =`MODE LOVE`;
        card1.style.backgroundColor  ="blue";
        card2.style.backgroundColor  ="blue";
        card123.style.color         ="rgb(45, 45, 137)";
    }
}