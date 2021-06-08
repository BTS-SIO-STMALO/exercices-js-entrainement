var app = {
// Je vais avoir besoin de 2 variables d'initialisation de compteur
    clickNumberYes: 0,
    clickNumberNo: 0, 

    yesButton: document.getElementById('yes'), 
    noButton: document.getElementById('no'),
    
    handleClick : function(event){
        // j'ai besoin de rajouter un paramètre à ma fonction afin de récupérer la valeur du bouton et en fonction mettre une condition d'incrémentation sur l'un ou l'autre des compteurs.
        console.log(event.currentTarget);
        // on a vu via notre console.log de event toutes les propriétés du DOM que l'on pouvait exploiter. Parmi elles, on a vu la propriété target. Dans le cas précis de cet exercice, les propriétés target et currentTarget du DOM nous renvoient exactement la même chose (l'élement html correspondant au bouton), cependant, il existe une différence fondamentale entre ces deux propriétés qui donc en fonction du code peut renvoyer des réslutats différents, pour en savoir plus : https://stackoverflow.com/questions/10086427/what-is-the-exact-difference-between-currenttarget-property-and-target-property
        // https://developer.mozilla.org/fr/docs/Web/API/Event/currentTarget
        // currentTarget est une propriété que nous récupérons et utilisons via JS qui nous permet de récupérer l'élement html sur lequel vient de se produire l'évenement. 
        // + précisément, currentTarget va nous retourner l'élement sur lequel on a appelé notre écouteur.
        
        // pour savoir quel compteur incrémenter, je vais faire une structure de contrôle qui vérifie l'id du bouton.
        if (event.currentTarget.id === "yes"){
            app.clickNumberYes++;
            document.getElementById("counter-yes").innerHTML = app.clickNumberYes;
        } else if (event.currentTarget.id === "no"){
            app.clickNumberNo++;
            document.getElementById("counter-no").innerHTML = app.clickNumberNo;
        }
    },
    init  : function(){
        app.yesButton.addEventListener("click", app.handleClick);
        app.noButton.addEventListener("click", app.handleClick);
    }
};

app.init();