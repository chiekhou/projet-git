'use strict';
/*************************************************************************************************/
/* ****************************************** DONNEES ****************************************** */
/*************************************************************************************************/

// let projects = document.querySelectorAll('.projet-item');
let projet = document.querySelectorAll(".list-project ul li");


/*************************************************************************************************/
/* ***************************************** FONCTIONS ***************************************** */
/*************************************************************************************************/

/**
 * 
 * Fonction gestion du boutton
 * "top button" pour scroller rapidement
 * jusqu'à la section accueil
 */
 function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        $("#myTop").css("display", "block");
    } else{  $("#myTop").css("display", "none");}
}

console.log('Je signe sur le commit de Karim')