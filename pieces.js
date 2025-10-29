
// Récupération des pièces depuis le fichier JSON
const reponse = await fetch('pieces-autos.json');
const pieces = await reponse.json();

for(let i=0; i<pieces.length;i++){
const imgElem = document.createElement("img");
imgElem.src=pieces[i].image;
const nomElem = document.createElement("h2");
nomElem.innerText= pieces[i].nom;
const catElem = document.createElement("p");
catElem.innerText= pieces[i].categorie??"(aucune catégorie)";
const prixElem = document.createElement("p");
prixElem.innerText=`Prix : ${pieces[i].prix} (${pieces[i].prix<35?"€":"€€€"})`;
const descElem = document.createElement("p");
descElem.innerText = pieces[i].description??"pas de description pour le moment";
const dispElem = document.createElement("p");
dispElem.innerText = pieces[i].disponibilite?"Rupture de stock":"En stock";

//Rattachement de nos balises au DOM
const sectionFiches = document.querySelector(".fiches");
const pieceElement = document.createElement("article");
sectionFiches.appendChild(pieceElement);

pieceElement.appendChild(imgElem);
pieceElement.appendChild(nomElem)
pieceElement.appendChild(prixElem)
pieceElement.appendChild(catElem);
pieceElement.appendChild(descElem);
pieceElement.appendChild(dispElem);
}

const btnTrier = document.querySelector(".btn-trier");
btnTrier.addEventListener("click", function(){
    const piecesOrdonnes = Array.from("pieces");
    piecesOrdonnes.sort(function(a,b){
        return a.prix-b.prix;
    })
});

const btnDecr = document.querySelector(".btn-decr");
btnDecr.addEventListener("click", function(){
    const piecesOrdonnesDecr = Array.from("pieces");
    piecesOrdonnesDecr.sort(function(a,b){
        return b.prix-a.prix;
    })
});

const btnFiltrer = document.querySelector(".btn-filtrer");
btnFiltrer.addEventListener("click", function(){
    const piecesFiltrees = pieces.filter(function (piece){
        return piece.prix <= 35;
    })
    
})

const btnDesc = document.querySelector(".btn-desc");
btnDesc.addEventListener("click", function(){
    const piecesFiltreesDescr = pieces.filter(function (piece){
        return piece.description;
    })
    
})




