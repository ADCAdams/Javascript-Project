const apiService = new ApiService()
const teamRadiant = []
const teamDire = []



document.addEventListener('DOMContentLoaded', function(){
    alert("index.js alert")
    addMatchButtonListener()
})

function addMatchButtonListener() {
    const button = document.getElementById("newMatchButton")
    button.addEventListener('click', function(){
        makeTeams()
    })
}

function makeTeams() {
    let matchHeros = []
    clearHeroList("radiantListID")
    clearHeroList("direListID")
    apiService.getHeros().then(heros => { 
        console.log(typeof(heros));
        while (matchHeros.length < 10){
            const rawHero = heros[Math.floor(Math.random() * heros.length)]
            const newHero = new Hero(rawHero)
            if (!matchHeros.includes(newHero)){
                matchHeros.push(newHero)
            }
        }
        teamRadiant = matchHeros.slice(5);
        teamDire = matchHeros.slice(5,10);
        

        teamRadiant.forEach(hero => {
           appendRadiantHero(hero);
        })
        teamDire.forEach(hero => {
            appendDireHero(hero);
         })
    })
}

function renderHero(hero){
    return `<li class = "heroListItem">
                ${hero.name} --- ${hero.winrate}
        </li>`;
}

function appendRadiantHero(hero) {
    radiantUL = document.getElementById("radiantListID")

    liHero = renderHero(hero)
    radiantUL.append(ilHero)

}
function appendDireHero(hero) {
    direUL = document.getElementById("direListID")

    liHero = renderHero(hero)
    direUL.append(ilHero)

}

function clearHeroList(listID){
    var ul = document.getElementById(listID);
    while(ul.firstChild) ul.removeChild(ul.firstChild);
}
