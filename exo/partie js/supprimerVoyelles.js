// ** addEventListener - capter un evènement clavier - "keypress" - array.includes()
// TODO 1: Dans une variable leTexte, récupérer l'input
// TODO 2: Une variable txtTab initialisée avec un tableau vide
// TODO 3: Une variable voyelles, un tableau contenant toutes les voyelles aeiouy
// TODO 4: sur leText placer un addEventListener qui écoute "keypress" et execute une fonction qui a unEvent en paramètre
// TODO 5-1: Dans cette fonction, on stock dans une variable uneTouche ce que tape l'utilisateur au clavier
// TODO 5-2: Ensuite, un if vérifier l'inverse de : voyelles qui inclut uneTouche
// TODO 5-3: Si cette condition est remplie alors ajouter uneTouche au tablau txt
// TODO 6-1: Hors du If et toujours dans le addEventListener, console log de txt sur quoi on utilise la fonction .join()
// TODO 6-2: En paramètre de join() on passe "--"

const leText = document.querySelector('input');
console.log(leText)
const textTab = [];
console.log(textTab)
const voyelles = ['a','e','i','o','u','y'];
console.log(voyelles)
leText.addEventListener("keypress",function(unEvent) {
    console.log(unEvent.key);
    const uneTouche = unEvent.key
    if(!voyelles.includes(uneTouche)){
        textTab.push(uneTouche)
    }
    console.log(textTab.join("-"))
});
