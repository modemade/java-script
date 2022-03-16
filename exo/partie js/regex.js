// ** REGEX 
// TODO : Une page html avec un formulaire de connexion (login et mot de passe)
// TODO : faire un programme JS qui va vérifier la saisi du login et mot de passe
// TODO : Le login doit être au format mail (doit contenir un @ et un . )
// TODO : Le MDP doit contenir : (entre 6 et 8 caractères) (1 caractère spécial minimum) (1 chiffre)
// TODO : Si le login n’est pas bon l'input est rouge sinon il est en vert
// TODO : Si le MDP n’est pas valide on affiche une explication en rouge (si MDP trop long, trop court ne contient pas de chiffres, ne contient pas de caractère spécial)
// TODO : Si le MDP est valide on affiche un message en vert "Mot de passe valide"

// const monLogin = document.getElementById('login');

// const regex = /^[a-z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,6}$/;
// const para = document.createElement("p");
// para.innerText = "This is a paragraph";
// document.body.appendChild(para)

// monLogin.addEventListener('keyup', function (unEvent) {
//     console.log(monLogin.value);
    
//     if (regex.test(monLogin.value)) {
//         monLogin.style.backgroundColor = 'green';
//     } else {
//         monLogin.style.backgroundColor = 'red'
//     }
//     console.log(monLogin);
// })
// const monMdp = document.getElementById('password');
// const regexMdp = /[$&@!?]/;
// monMdp.addEventListener('keyup', function (unEvent) {
//     console.log(monMdp.value)
//     if (regexMdp.test(monMdp.value)) {
//         monMdp.style.backgroundColor = 'green';
//     erreur +="<li>Doit contenir un Caractère spécial $&@!? !!!!!</li>";
//         resultatPassword.innerHTML = "MDP : <ul>" + erreur + "</ul>";} else {
        
//         monMdp.style.backgroundColor = 'red'
//     }
//     console.log(monMdp);
    
// })

// Correction du Prof
const login = document.querySelector("#login");
const password = document.querySelector("#password");
const resultatPassword = document.querySelector("#resultatPassword");

login.addEventListener("keyup", function(){
    //maRegex, is a regex for the login/mail input
    //dans ce cas, pour un email : 
    //Après le @ : [a-z0-9._-], on accepte les lettre de a à z, les chiffres de 0 à 9
    //Ainsi que le ".", le "-", le "_"
    //Après le "." : +\.[a-z]{2,6}, on accepte les lettre de a à z, on accepte entre 2 et 6 lettre après 
    // le . de l'adresse mail (.fr, .com, etc...)
    let maRegex = /^[a-z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,6}$/;
    //Ensuite on test notre regex avec la value de l'input login
    //Si le test fail alors on met le bgColor de l'input en rouge, sinon c'est good le bgColor est en vert
    if(!maRegex.test(login.value)){
        console.log(login.value);
        login.style.backgroundColor = "red";
    }
    else{
        login.style.backgroundColor = "green";
    }
});

password.addEventListener("keyup",function(){
    //carDecimal = regex pour les décimaux
    let carDecimal = /\d/;
    //CarSpeciaux = regex dans laquelle j'ai mis les caractères spéciaux que je veux avoir 
    // le $, le &, le @, le !, le ?
    let carSpeciaux = /[$&@!?]/;
    //erreur: dans ca on va cumuler les message d'erreur que l'on affichera dans la div en dessous du fromulaire
    let erreur = "";

    if(password.value.length < 6){
        erreur += "<li>Le mot de passe est trop short</li>";
    }
    else if(password.value.length > 8){
        erreur += "<li>Le mot de passe est trop Long</li>";
    }
    //Si le password ne match pas de caractère decimal, on indique que le password doit contenir un chiffre
    if(!password.value.match(carDecimal)){
        erreur +="<li>Doit contenir un chiffre</li>";
    }
    //Idem si le password ne match pas de caractère spéciaux ("$","&","@", etc..)on indique que le password doit contenir caractère special
    if(!password.value.match(carSpeciaux)){
        erreur +="<li>Doit contenir un Caractère spécial $&@!? !!!!!</li>";
    }

    //Petit check si la variable erreur n'est pas vide, on affiche les erreur dans la <li></li> sous le form
    if(erreur !== ""){
        resultatPassword.innerHTML = "MDP : <ul>" + erreur + "</ul>";
        resultatPassword.style.border = "2px solid red";
    }
    else{
        resultatPassword.innerHTML = "MDP : VALIDE";
        resultatPassword.style.border = "2px solid green";
    }
})
