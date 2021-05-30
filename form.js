var nom = document.getElementById('nom');
var prenom = document.getElementById('prenom');
var adresse = document.getElementById('adresse');
var CP = document.getElementById('CP');
var ville = document.getElementById('ville');
var email = document.getElementById('email');
var tel = document.getElementById('tel');
var comm = document.getElementById('texteFormulaire');
var panier =document.getElementById('panier')
let btnCommander = document.getElementById('commander');

btnCommander.addEventListener('click', () => {
    formulaire.style.display = 'block';
})

var commandeValider = document.getElementById('commande-check');
var formulaire = document.getElementById('caisse');

let btnValiderForm =document.getElementById('valider');
console.log(btnValiderForm);

//addEventListener fait une action au boutton au click
btnValiderForm.addEventListener("click", () => {
    //Grâce à .setItem() = enregistrer les données dans le local storage
    localStorage.setItem("Nom", nom.value);
    localStorage.setItem("Prénom", prenom.value);
    localStorage.setItem("Adresse", adresse.value);
    localStorage.setItem("CP", CP.value);
    localStorage.setItem("Ville", ville.value);
    localStorage.setItem("Email", email.value);;
    localStorage.setItem("Téléphone", tel.value);
    localStorage.setItem("Commentaires", comm.value);

    document.getElementById("leNom");
    document.getElementById("lePrenom");
    document.getElementById("ladresse");
    document.getElementById("leCP");
    document.getElementById("laVille");
    document.getElementById("lemail");
    document.getElementById("leTel");
    document.getElementById("votreCommentaires");
    
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
