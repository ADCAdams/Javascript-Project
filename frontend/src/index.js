// const endpoint = "http://localhost:3000/heros"


const BASE_URL = "http://localhost:3000"
const HEROS_URL = `${BASE_URL}/heros`

//const apiService = new ApiService()

function getHeros() {
    return fetch(HEROS_URL).then(res => res.json());
}

function dotadata(){
    return fetch("https://api.opendota.com/api/heroStats").then(res => res.json());
}

function serviceListener() {
    document.addEventListener("DOMContentLoaded", function(){
        alert("alerrrrt")
    });
}

function updateHero(hero){
    win = "5_win"
    pick = "5_pick"
    winrate = (hero[win])/(hero[pick])
    winrate= winrate.toFixed(4)
    console.log(`${hero.localized_name} has a winrate of ${winrate}`)
}

dotadata().then(heros => {
    // console.log(heros)
    heros.forEach(hero => {
    updateHero(hero)
    })
})
