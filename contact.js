
var email = document.getElementById('email');
var message = document.getElementById('message');
var nom = document.getElementById('nom');
var tel = document.getElementById('tel');

var contact = document.getElementById('contact');

let btnValiderContact = document.querySelector('button');
console.log(btnValiderContact);

//addEventListener fait une action au boutton au click
btnValiderContact.addEventListener("click", () => {
    //Grâce à .setItem() = enregistrer les données dans le local storage
    console.assert()
    
    commandeValider.style.display = 'block';

    //Grâce à .getItem() = récupere les données dans le local storage et l'affiche grâce à console.log()
    console.log(
        (document.getElementById("leNom").innerHTML = localStorage.getItem("Nom"))
    );
    console.log(
        (document.getElementById("lePrenom").innerHTML = localStorage.getItem("Prénom"))
    );
    console.log(
        (document.getElementById("lAdresse").innerHTML = localStorage.getItem("Adresse"))
    );
    console.log(
        (document.getElementById("leCP").innerHTML = localStorage.getItem("CP"))
    );
    console.log(
        (document.getElementById("laVille").innerHTML = localStorage.getItem("Ville"))
    );
    console.log(
        (document.getElementById("lemail").innerHTML = localStorage.getItem("Email"))
    );
    console.log(
        (document.getElementById("leTel").innerHTML = localStorage.getItem("Téléphone"))
    );
    console.log(
        (document.getElementById("votreCommentaires").innerHTML = localStorage.getItem("Commentaires"))
    );
    
    formulaire.style.display = 'none';

});
