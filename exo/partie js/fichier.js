/* const monTitre = document.querySelector('h1');

console.log(monTitre);

monTitre.style.color = 'green'

monTitre.style.backgroundColor ='black' */

/* let titre = document.querySelector('h1');

titre.addEventListener('click',function(){

    console.log('ayaa ça reagit');

}) */

// const mti = document.querySelector('h1')
// //console.log(mti);
// const lesLien = document.querySelectorAll('a')
// console.log(lesLien);
// lesLien[0].addEventListener('click',function(){
//     mti.classList.add('maCouleur');
//     console.log('mti')
// })
// lesLien[1].addEventListener('click',function(){
//     mti.classList.remove('maCouleur');
// })

// lesLien[2].addEventListener('click',function(){
//     mti.classList.toggle('maCouleur');
// })
// mti.style.textAlign = 'center';
// mti.style.alignSelf = 'center';

/* const monLien = document.querySelector('a')
monLien.addEventListener('click',function(event) {
    console.log('super nickel');
    console.log(event.x);
}) */

/* const md = document;
md.addEventListener('keyup',function(event){
    console.log('keyup')
    console.log(event.x)
})

md.addEventListener('click',function(event){
    console.log('keyut')
    console.log(event.button)
})
 */

/* const monTitre = document
monTitre.document.querySelectorAll('h1');
monTitre.addEventListener('mouseout',function(event){
    monTitre.style.display = 'block'
}) */

/* const ihiotsim = document.addEventListener('click', function (unEvent) {
    console.log(unEvent.x);
    const monImg = document.createElement('img');
    monImg.setAttributes('src', 'http://via.placeholder.com/640x360');
    console.log(monImg);
    monImg.style.position = 'absolute';
    monImg.style.left = unEvent.x;
    monImg.style.top = unEvent.y;
    document.body.append(monImg);
}) */

/* //Dans toute la page on reagit au click, on veut capter cet event.
document.addEventListener("click", function(unEvent) {
    //On concole log l'event que l'on capte pour voir si des propriétés 
    //peuvent nous interresser
    console.log(unEvent);
    //on console log les propriétés X et Y du click (clientX, clientY)
    console.log("Coord X",unEvent.x, "-", "Coord Y:", unEvent.y);
    //Ensuite on va créer une image 
    const monImg = document.createElement("img");
    const taille = 90;
    //Puis on va modifier l'attribut SRC de l'image, pour lui asisgner 
    //L'url d'une image de notre choix
    monImg.setAttribute
    //Optimisation : avec la variable taille dans l'url
        ("src",`https://www.placecage.com/${taille}/${taille}/`);
            //Puis on change le type de position (absolute ca se place ou on veut dans la page)
            monImg.style.position = "absolute";
            //pour opti le centrage, on soustrait la moitié de la taille de l"img
            monImg.style.left = unEvent.x - taille /2 + "px";
            monImg.style.top = unEvent.y - taille /2 + "px";
            //On oubli pas de placer l'image dns la page
            document.body.appendChild(monImg);
}); */


