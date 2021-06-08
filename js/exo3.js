var app = {

    /* ce que je veux faire :
    - 1 : récupérer ce que l'utilisateur a rempli dans le formulaire
        a. je bloque l'envoi de mon formulaire
        b. je récupérère ce qu'il y a dans l'input
    - 2 : injecter ce que l'utitilisateur a rempli dans mon htlm sous la forme d'une balise li
    */
   handleFormSubmit: function(event){
       // Je veux "bloquer" la soumission de mon formulaire afin d'éviter le rechargement de page (qui est le comportement naturel d'un formulaire)
       // pour cela, je vais utiliser la méthode preventDefault(). la document ci-dessous :
       // https://developer.mozilla.org/fr/docs/Web/API/Event/preventDefault
       event.preventDefault();
       console.log("j'ai bloqué la soumission du formulaire");

       let input = document.getElementById("shop-item-input");
       // je veux récupérer ce que l'user a rempli dans l'input, je vais donc viser sa propriété value.
       //https://www.w3schools.com/jsref/prop_text_value.asp
       let item = input.value ;
       console.log(item);

       input.value ="";
       
       // etape 2
       let list = document.getElementById("shop-items");
       list.innerHTML += '<li>'+ item + '</li>';
   },



    init : function(){
       // je vais mettre mon écouteur sur la soumission de mon formulaire, pour cel je vais utiliser l'événement de type submit sur mon formulaire, voir la documentation : https://developer.mozilla.org/fr/docs/Web/API/HTMLFormElement/submit_event
       let form = document.getElementById("shop-item-form");
       form.addEventListener('submit', app.handleFormSubmit);
    }

};

app.init();