/*// Je vais initialiser une variable avec mon nombre de clic
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
*/

// Les Modules en Javascript
// N'importe quel programme qu'on crée, s'organise selon des thématiques ou grandes fonctionnalités comme par exemple : les comptes utilisateurs, Afficher des scores, Emprunter un livre. L'idée c'est de créer des modules pour exploiter dans plusieurs projets les mêmes briques de code. Ca permet aussi de compartimenter mon code, chaque thématique étant isolée dans un module. 

// Par convention, le module général s'appelle app et on y inclue une méthode init() qui va servir de point d'entrée dans le module. Init contient tous les traitements qui lancent l'application. 

var app = {
    // j'initialise une propriété de mon objet qui va contenir le nombre de clic
    clickNumber: 0,

    handleClick: function(){
        // j'incrémente la propriété clickNumber de mon objet app.
        app.clickNumber++;
        var compteur = document.getElementById('counter');
        console.log(compteur);
        compteur.innerHTML = app.clickNumber;
    },

    init: function(){
        // cible mon élément bouton
        var monBouton = document.querySelector('button');
        // je mets mon bouton sur écoute au click
        monBouton.addEventListener('click', app.handleClick);
    }
};
console.log(app);
app.init();

