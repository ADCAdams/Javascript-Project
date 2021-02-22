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
            //Hero.updateHeros();
        }
    })
}


function createMatch(){
    currentMatch = new Match();
    currentMatch.makeTeams()
}
