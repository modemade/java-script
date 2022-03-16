class imc {
    constructor(nom, poids, taille) {
        this.nom = nom;
        this.poids = poids;
        this.taille = taille;
        this.imc = this.calculImc();
    }
    calculImc() {
        ;
        return this.poids * this.taille ** 2

    }
    display() {
        console.log("la valeur de la liste ",this.nom,this.poids,this.taille)
    }
}
const list = [
    new imc("Sébastien Chabal", 135, 1.70),
    new imc("Escaladeuse Ultra Svelte", 45, 1.68),
    new imc("JOJO ", 300, 2),
];
list.forEach(uneCase => uneCase.display());