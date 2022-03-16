/* const text = document.querySelector('textarea');

const rendu = document.querySelector('div');

text.addEventListener('keyup',function(div){
    console.log(text.value);
    rendu.innerText=text.value;
    console.log(rendu);
}) */

const monText= document.querySelector('textarea')
const rendu = document.querySelector('div');

monText.value = localStorage.getItem('monSuperTexte');
localStorage.getItem('monSuperTexte'); 
if(monText.value){
    rendu.innerHTML = localStorage.getItem('monSuperTexte');
}
monText.addEventListener('keyup',function(){
    localStorage.setItem('monSuperTexte', monText.value)
    rendu.innerHTML = monText.value;
})