'use strict'; // cette formule permet d'optimiser le code 
let titre= document.querySelector('.titre');
let tour = 'x'; // le tour du joueur qui choisit x 
let id = document.querySelectorAll('[id^="carre"]');
// document.querySelectorAll('[id^="carre"]') pour sélectionner tous les éléments dont l'ID commence par "carre"
for (let i = 0; i < id.length; i++) {// boucle for pour itérer sur chaque élément. La variable i représente l'index dans la boucle.
    let variable = id[i];// Création d'une nouvelle variable pour chaque élément :
    // passon a la compariason 
    function fin_jeu_victoire(numero1,numero2,numero3){
        // accède à l'élément dans le tableau id avec une manière d'ajouer une variable dans une chaîne
        titre.innerHTML =`${id[numero1].innerHTML} gagne`;
        // Affiche le message du gagnant avec la couleur jaune
        titre.style.color='red';
        // Change la couleur de fond des carrés gagnants
        id[numero1].style.backgroundColor = 'blue';
        id[numero2].style.backgroundColor = 'white';
        id[numero3].style.backgroundColor = 'red';
        // Ajoute des points tous les 1 seconde dans le tiitre
        setInterval(function(){titre.innerHTML+="."},1000);
        // Recharge la page après 4 secondes
        setTimeout(function() {location.reload()},4000)
    }
    
    function match_nul(){
        titre.innerHTML ="Matche nul";
        setInterval(function(){titre.innerHTML+="."},1000);
        setTimeout(function() {location.reload()},4000)
    }
    function fin_jeu_nul(){
        if (
            id[0].innerHTML !== '' &&
            id[1].innerHTML !== '' &&
            id[2].innerHTML !== '' &&
            id[3].innerHTML !== '' &&
            id[4].innerHTML !== '' &&
            id[5].innerHTML !== '' &&
            id[6].innerHTML !== '' &&
            id[7].innerHTML !== '' &&
            id[8].innerHTML !== ''
        ) {
            match_nul();}
    }
    
    function gagnant(){  // fonction qui va analysée tout les cas de victoire        
        if (id[0].innerHTML == id[1].innerHTML && id[1].innerHTML == id[2].innerHTML && id[0].innerHTML != '') {
            //si la valeur du carre1 est =  a la valeur du carre 2 ...
            fin_jeu_victoire(0,1,2);
        }
        else if(id[3].innerHTML == id[4].innerHTML && id[4].innerHTML == id[5].innerHTML && id[5].innerHTML != ''){
            fin_jeu_victoire(3,4,5);

        }
        else if(id[6].innerHTML == id[7].innerHTML && id[7].innerHTML == id[8].innerHTML && id[7].innerHTML != ''){
            fin_jeu_victoire(6,7,8);

        }
        // 3 ligne de large
        else if(id[0].innerHTML == id[3].innerHTML && id[3].innerHTML == id[6].innerHTML && id[0].innerHTML != ''){
            fin_jeu_victoire(0,3,6);
        }
        else if(id[1].innerHTML == id[4].innerHTML && id[4].innerHTML == id[7].innerHTML && id[7].innerHTML != ''){
            fin_jeu_victoire(1,4,7);
                }
        else if(id[2].innerHTML == id[5].innerHTML && id[5].innerHTML == id[8].innerHTML && id[5].innerHTML != ''){
            fin_jeu_victoire(2,5,8);
        }
        // 3 ligne long
        else if(id[0].innerHTML == id[4].innerHTML && id[4].innerHTML == id[8].innerHTML && id[0].innerHTML != ''){
            fin_jeu_victoire(0,4,8);
        }
        else if(id[2].innerHTML == id[4].innerHTML && id[4].innerHTML == id[6].innerHTML && id[2].innerHTML != ''){
            fin_jeu_victoire(2,4,6);
        }
        else{
            fin_jeu_nul();
        }
    }
    variable.addEventListener("click", function jeux() {
        // Ajouter un gestionnaire d'événements de type click sur la fonction jeux pour chaque élément
        if (tour === 'x' && variable.innerHTML !== 'X' && variable.innerHTML !== 'O') {
            // Si c'est le tour du joueur 'x' et il n'y ni 'X' ni 'O' dans l'élément
            variable.innerHTML = 'X';// alors écris 'X' dans l'élément
            tour = 'o';//maintenat c'est le tour de'O' psq 'X' a deja ecrit
            titre.innerHTML='O' // on Ecrit dans le titre que c'est me  tour du O
        }
        else if(tour==='o'&& variable.innerHTML!=='X'&& variable.innerHTML!=='O')
        {
            // // si c'est le tour de'O' et il n'y ni 'X' ni 'O' alors
            variable.innerHTML = 'O';
            // Ecrit O
            tour = 'x'; // Maintenant c'est le tour de X
            titre.innerHTML='X' // On écrit dans le Titre que c'est le tour de X
        }
        gagnant();
    } 
);
}
 //  fin de l'affichage 
