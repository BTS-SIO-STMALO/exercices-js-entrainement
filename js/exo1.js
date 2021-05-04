// Je vais initialiser une variable avec mon nombre de clic
var clickNumber = 0;

// Je cible mon élément du DOM sur lequel j'ai envie de mettre un écouteur.
// Ici j'aurai pu aussi utiliser document.getElementById('btn')
var monBouton = document.querySelector('button');
console.log(monBouton);

// Je crée une fonction anonyme qui sera appelée au déclenchement de l'évènement
var handleClick = function(){
    // on veut que la fonction à chaque événement incrémente ma variable clickNumber de 1
    console.log('Coucou je suis la fonction appelée'); 
    clickNumber++;
    console.log(clickNumber);
    // je veux cibler l'élément que je souhaite modifier
    var compteur = document.getElementById('counter');
    console.log(compteur);
    compteur.innerHTML = clickNumber;
}
// Je crée un écouteur d'événement sur mon bouton
monBouton.addEventListener('click', handleClick);


