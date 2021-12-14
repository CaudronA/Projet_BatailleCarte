const bouton= document. getElementById("bouton");
const joueur1= document.getElementById("joueur1");
const joueur2= document.getElementById("joueur2");

let partie= false;

function demarragepartie() {
    if(partie){
        joueur1.style.opacity=0;
        joueur2.style.opacity=0;
    }else{
        joueur1.style.opacity=1;
        joueur2.style.opacity=1;
    }
    partie=!partie;
}

bouton.addEventListener("click", demarragepartie);

let actionJ1= false

function tourJ1(){
    if(actionJ1){
        paragraphe1.style.opacity;
    }

    }
    joueur1.addEventListener("click", tourJ1);

let actionJ2= false;
function tourJ2(){

        tourJ2.style.opacity= 0;

    }
    joueur2.addEventListener("click", tourJ2);

