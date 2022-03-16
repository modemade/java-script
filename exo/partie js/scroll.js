// ** addEventListener - capter un évènement "scroll" - scrollHeight  - innerHeight - scrollY
// TODO 1: Dans une variable laBar, récupérer la div qui possède la classe .bar
// TODO 2: Sur document, placer un addEventListener qui écoute "scroll" et execute une fonction
// TODO 3: dans cette fonction, on console log document.body.scrollHeight (la hauteur de page), innerHeight (hauteur de l'affichage) et scrollY (la position du scroll)
// TODO 4: Ensuite, dans une variable scrollMax, on soustrait à document.body.scrollHeight, innnerHeight
// TODO 5: Dans une variable onEstOu, on fait un pourcentage de scrollY sur scrollMax
// TODO 6: Modifier dans le style de laBar, la width en lui assignant onEstOu en "%"


const laBar = document.querySelector('.bar');
document.addEventListener('scroll', function () {
    console.log(document.body.scrollHeight,  innerHeight, scrollY)
    const scrollMax = document.body.scrollHeight - innerHeight;
    console.log("le scroll max est de :"+scrollMax)
});

const onEstOu = (scrollY/ scrollMax)*100;
console.log(onEstOu)

