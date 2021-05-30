//
//ajouter des valeurs dans le local storage
// .setItem("nom", "cle") = enregistrer les valeurs dans le local storage
localStorage.setItem("nom", "Appadoo");
localStorage.setItem("prenom", "Yanny");
localStorage.setItem("lieu", "Versailles")

// retrouver ces valeur:  'Inspecter' -> '>>Application' -> 'local storage' -> fichier en dessous


//
//récuperer une donnée dans le local storage
//.getItem("cle") = récuperer la valeur enregister dans le local storage
let maDonnee = localStorage.getItem("lieu");
console.log(maDonnee);

//voir ou la valeur est recuperer dans: inspecter -> console


//
//Supprimer une donnée dans le local storage
//.removeItem("xle") = supprimer une donnee dans le local storage
localStorage.removeItem("prenom");

//Supprimer toutes les données
//.clear("") = effacer toutes les nom
localStorage.clear(); 


///

const dataApi = fetch("C:\Users\Yanny\OneDrive\Documents\HETIC\Projet\projet Front-end final\img1");