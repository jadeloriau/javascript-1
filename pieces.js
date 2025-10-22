const response = await fetch('pieces-auto.json');
const pieces = await response.json();

const article= pieces[0];
const imgElem = document.createElement("img");
imgElem.src=article.image;
const nomElem = document.createElement("h2");
nomElem.innerText= article.nom;
const catElem = document.createElement("p");
catElem.innerText= article.categorie??"(aucune catégorie)";
const prixElem = document.createElement("p");
prixElem.innerText='Prix : ${article.prix} (${article.prix}<35?"€":"€€€")';
const descElem = document.createElement("p");
descElem.innerText = article.description??"pas de description pour le moment";
const dispElem = document.createElement("p");
dispElem.innerText = article.disponibilite?"Rupture de stock":"En stock";


const sectionfiches = document.querySelector(".fiches");
sectionfiches.appendChild(imgElem);
sectionfiches.appendChild(nomElem)
sectionfiches.appendChild(prixElem)
sectionfiches.appendChild(catElem);
sectionfiches.appendChild(descElem);
sectionfiches.appendChild(dispElem);