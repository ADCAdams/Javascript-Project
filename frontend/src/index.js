const apiService = new ApiService()
const TEAMRADIANT = []
const TEAMDIRE = []
let currentMatch


document.addEventListener('DOMContentLoaded', function(){

    addMatchButtonListener()
    addSaveMatchButtonListener()
})

function addMatchButtonListener() {
    const button = document.getElementById("newMatchButton")
    button.addEventListener('click', function(){
        createMatch();
    })
}

function addSaveMatchButtonListener() {
    const button = document.getElementById("saveMatchButton")
    button.addEventListener('click', function(){
        if (currentMatch){
            apiService.postMatch(currentMatch)
        }
    })
}


function createMatch(){
    currentMatch = new Match();
    currentMatch.makeTeams()
}




// function makeTeams() {
//     let matchHeros = []
//     clearHeroList("radiantListID");
//     clearHeroList("direListID");

//     let heros = []

//     apiService.getHeros().then(herosResp => { 
//         heros = herosResp.data //makes array of heros


//         while (matchHeros.length < 10){ //gets 10- heros
//             const rawHero = heros[Math.floor(Math.random() * heros.length)]
//             const newHero = new Hero(rawHero)
//             if (!matchHeros.includes(newHero)){
//                 matchHeros.push(newHero) //adds unique heros to the array
//             }
//         }
//         TEAMRADIANT = matchHeros.slice(0,5); //splits on to two teams
//         TEAMDIRE = matchHeros.slice(5,10);

//         let newMatch = new Match(TEAMRADIANT,TEAMDIRE); //MATCH IS NOT DEFINED HERE
//         apiService.postMatch(newMatch); //MATCH IS NOT DEFINED HERE
        

//         TEAMRADIANT.forEach(hero => {
//            appendRadiantHero(hero);
//         })
//         TEAMDIRE.forEach(hero => {
//             appendDireHero(hero);
//          })
//     })
//}

// function renderHero(hero){
//     let newli = document.createElement('li')
//     newli.className="heroListItem"
//     newli.innerHTML = `<span class="heroLiSpan"> <span class="heroNameSpan">
//     ${hero.name}
//     </span>
//     <span class="heroWinrateSpan">
//     ${parseFloat(hero.winrate*100).toFixed(2)+"%"}
//     </span> </span>`
//     return newli
// }

// function appendRadiantHero(hero) {
//     let radiantUL = document.getElementById("radiantListID")

//     let liHero = renderHero(hero)
//     radiantUL.append(liHero)

// }
// function appendDireHero(hero) {
//     let direUL = document.getElementById("direListID")

//     let liHero = renderHero(hero)
//     direUL.append(liHero)

// }

// function clearHeroList(listID){
//     var ul = document.getElementById(listID);
//     while(ul.firstChild) ul.removeChild(ul.firstChild);
// }
