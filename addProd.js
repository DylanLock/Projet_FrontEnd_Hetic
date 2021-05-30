let ajoutProduit = document.querySelectorAll('.ajouter-panier');

for (let i=0; i < ajoutProduit.length; i++) {
    ajoutProduit[i].addEventListener('click', () => {
        console.log("added to cart");
        numbrProd()
    })
}

function nombrProd() {

}
