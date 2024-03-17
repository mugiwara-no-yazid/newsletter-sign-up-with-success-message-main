const button = document.querySelector("button")
const nomprenom = document.querySelector("#nom")
const numcarte = document.querySelector("#numcarte")
const mois = document.querySelector("#expirationmois")
const annee = document.querySelector("#expirationannee")
const code = document.querySelector("#code")
const remplirNumCarte = document.querySelector(".numerosdecarte")
const nomPrenomCarte = document.querySelector(".nomutilisateur")
const moisCarteExp = document.querySelector ("#moiscarteexp")
const anneCarteExp = document.querySelector("#annecarteexp")
const cartegrisCode =document.querySelector("#cartegrisCode")

function alteration(champs,elementamodifier)
{
    elementamodifier.textContent =`${champs.value }`
}
function modification(champs ,elementamodifier) {
    champs.addEventListener("input",function () {
    alteration(champs,elementamodifier)
})
}
button.addEventListener('click',function(e)
{
    e.preventDefault()
    alteration(nomprenom,nomPrenomCarte)
    alteration(numcarte,remplirNumCarte)
    alteration(mois,moisCarteExp)
    alteration(annee,anneCarteExp)
    alteration(code,cartegrisCode)
})

modification(nomprenom,nomPrenomCarte)
modification(numcarte,remplirNumCarte)
modification(mois,moisCarteExp)
modification(annee,anneCarteExp)
modification(code,cartegrisCode)