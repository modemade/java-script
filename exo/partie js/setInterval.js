// ** Executer 1 script ttes les X sec - addEventListener - click - innerHTML
// TODO 1: récupérer le titre dans une variable monTitre
// TODO 2: créer une variable timer initialisée à 3
// TODO 3-1: sur monTitre on place un addEventListener qui surveille le click et qui exécute une fonction
// TODO 3-2: Dans cette fonction, créer une variable countDown à laquelle on assigne la fonction setInterval()
// TODO 3-3: setInterval() prend en 1er param, une fonction et en 2e param 1000 ms
// TODO 4-1: Dans la fonction de setInterval(), SI timer est supperieur à 0, on assigne au innerHTML de monTitre, timer
// TODO 4-2: SINON, on assigne au innerHTML de monTitre, "GO GO GO"
// TODO 5: Après ces conditions, on désincrémente timer

const monTitre = document.querySelector('monTitre');
const timer = 3;
monTitre.addEventListener('click',function(){
    countDown = setInterval(function(){
if(timer > 0){
monTitre.innerHTML=timer;
}else{
    monTitre.textContent='GO GO GO';
    console.log(timer)
    clearInterval(countDown)
}
    },2000)
})
console.log(monTitre);