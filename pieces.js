
// Récupération des pièces depuis le fichier JSON
const reponse = await fetch('pieces-autos.json');
const pieces = await reponse.json();

// Création des balises 
const article= pieces[0];
const imgElem = document.createElement("img");
imgElem.src=article.image;
const nomElem = document.createElement("h2");
nomElem.innerText= article.nom;
const catElem = document.createElement("p");
catElem.innerText= article.categorie??"(aucune catégorie)";
const prixElem = document.createElement("p");
prixElem.innerText=`Prix : ${article.prix} (${article.prix<35?"€":"€€€"})`;
const descElem = document.createElement("p");
descElem.innerText = article.description??"pas de description pour le moment";
const dispElem = document.createElement("p");
dispElem.innerText = article.disponibilite?"Rupture de stock":"En stock";

//Rattachement de nos balises au DOM

const sectionFiches = document.querySelector(".fiches");
sectionFiches.appendChild(imgElem);
sectionFiches.appendChild(nomElem)
sectionFiches.appendChild(prixElem)
sectionFiches.appendChild(catElem);
sectionFiches.appendChild(descElem);
sectionFiches.appendChild(dispElem);
