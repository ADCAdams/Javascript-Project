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

    let heros = []
    apiService.getHeros().then(herosResp => { 
        heros = herosResp.data


        while (matchHeros.length < 10){
            const rawHero = heros[Math.floor(Math.random() * heros.length)]
            const newHero = new Hero(rawHero)
            if (!matchHeros.includes(newHero)){
                matchHeros.push(newHero)
            }
        }
        let teamRadiant = matchHeros.slice(0,5);
        let teamDire = matchHeros.slice(5,10);
        

        teamRadiant.forEach(hero => {
           appendRadiantHero(hero);
        })
        teamDire.forEach(hero => {
            appendDireHero(hero);
         })
    })
}

function renderHero(hero){
    let newli = document.createElement('li')
    newli.className="heroListItem"
    newli.innerHTML = `${hero.name} --- ${hero.winrate}`
    return newli
}

function appendRadiantHero(hero) {
    let radiantUL = document.getElementById("radiantListID")

    let liHero = renderHero(hero)
    radiantUL.append(liHero)

}
function appendDireHero(hero) {
    let direUL = document.getElementById("direListID")

    let liHero = renderHero(hero)
    direUL.append(liHero)

}

function clearHeroList(listID){
    var ul = document.getElementById(listID);
    while(ul.firstChild) ul.removeChild(ul.firstChild);
}
