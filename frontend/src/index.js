const apiService = new ApiService()
const teamRadiant = []
const teamDire = []



document.addEventListener('DOMContentLoaded', function(){

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
    clearHeroList("radiantListID");
    clearHeroList("direListID");

    let heros = []
    let teamRadiant = []
    let teamDire = []
    apiService.getHeros().then(herosResp => { 
        heros = herosResp.data //makes array of heros


        while (matchHeros.length < 10){ //gets 10- heros
            const rawHero = heros[Math.floor(Math.random() * heros.length)]
            const newHero = new Hero(rawHero)
            if (!matchHeros.includes(newHero)){
                matchHeros.push(newHero) //adds unique heros to the array
            }
        }
        teamRadiant = matchHeros.slice(0,5); //splits on to two teams
        teamDire = matchHeros.slice(5,10);
        

        teamRadiant.forEach(hero => {
           appendRadiantHero(hero);
        })
        teamDire.forEach(hero => {
            appendDireHero(hero);
         })
    })

    let newMatch = new Match(teamRadiant,teamDire); //MATCH IS NOT DEFINED HERE
    apiService.postMatch(newMatch); //MATCH IS NOT DEFINED HERE


}

function renderHero(hero){
    let newli = document.createElement('li')
    newli.className="heroListItem"
    newli.innerHTML = `<span class="heroLiSpan"> <span class="heroNameSpan">
    ${hero.name}
    </span>
    <span class="heroWinrateSpan">
    ${parseFloat(hero.winrate*100).toFixed(2)+"%"}
    </span> </span>`
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
