class Match {

    constructor(){
        this.matchHeros = [] //purpose of checking for a unique hero list later
        this.winner = ""
        this.radiantTeamInstance = []
        this.direTeamInstance = []
        this.winnerProbability = 0
    }



    makeTeams() {
        this.matchHeros = []
        Match.clearHeroList("radiantListID");
        Match.clearHeroList("direListID");
        Match.clearWinners();

        apiService.getHeros().then(herosResp => { 
            let allHeros = []
            let rawHerosForMatch = []
            allHeros = herosResp.data //makes array of heros
    
    
            while (this.matchHeros.length < 10){ //gets 10- heros
                const rawHero = allHeros[Math.floor(Math.random() * allHeros.length)]
                if (!rawHerosForMatch.includes(rawHero)){
                    rawHerosForMatch.push(rawHero)
                    const newHero = new Hero(rawHero)
                    this.matchHeros.push(newHero) //adds unique heros to the array
                }
            }
            this.radiantTeamInstance = this.matchHeros.slice(0,5); //splits on to two teams
            this.direTeamInstance = this.matchHeros.slice(5,10);
            
    
            this.radiantTeamInstance.forEach(hero => {
               Match.appendRadiantHero(hero);
            })
            this.direTeamInstance.forEach(hero => {
                Match.appendDireHero(hero);
             })

             this.calculateMatchWinner();

        }) //ends get promise    
    }

     calculateTeamWinAvg(teamHeroArray){
        let teamWinAvg = 0
        teamHeroArray.forEach(function (hero){
            teamWinAvg += hero.winrate
        })
        teamWinAvg = teamWinAvg/5
        return teamWinAvg
    }
    
     calculateMatchWinner(){
         const radiantWinAvg = this.calculateTeamWinAvg(this.radiantTeamInstance)
         const direWinAvg = this.calculateTeamWinAvg(this.direTeamInstance)
        if (radiantWinAvg > direWinAvg){
            this.winner = "Radiant"
            const delta = radiantWinAvg - direWinAvg
            this.winnerProbability = (delta/.07)  //or 'liklihood'
            
        } else if (direWinAvg > radiantWinAvg){
            this.winner = "Dire"
            const delta =  direWinAvg - radiantWinAvg
            this.winnerProbability = (delta/.07)  //or 'liklihood'
        } else {
            this.winner = "Tie"
        }
        this.appendWinner(this.winner,this.winnerProbability)
    }
 

    appendWinner(winnerArg,winProbArg){
        let winSpan = document.createElement('span')
        winSpan.className = "winnerSpan"
        winSpan.innerHTML = 
        `Winner: ${winnerArg}`;

        let winProbSpan = document.createElement('span');
        winProbSpan.className = "winnerSpan"
        winProbSpan.innerHTML = 
        `Probability of victory: ${(winProbArg*100).toFixed(2)+"%"}`;

        let winContainer = document.getElementById("containerWinner")
        winContainer.append(winSpan);
        winContainer.append(winProbSpan);
    }

     static renderHero(hero, teamFlag){
        let newli = document.createElement('li')
        newli.style =  teamFlag == "r" ? "border: 3px solid green;" : "border: 3px solid red;"
        newli.className="heroListItem"
        newli.innerHTML = 
        `<div class="heroLiSpan">
            <span class="heroImage">
                <img src="http://cdn.dota2.com/apps/dota2/images/heroes/${hero.name.toLowerCase()}_full.png" style="width:80px;height:45px;"></img>
            </span>
            <span class="heroNameSpan">
                ${hero.name}
            </span>
            <span class="heroWinrateSpan">
                ${parseFloat(hero.winrate*100).toFixed(2)+"%"}
            </span>
        </div>`
        return newli
    }
    
     static appendRadiantHero(hero) {
        let radiantUL = document.getElementById("radiantListID")
    
        let liHero = Match.renderHero(hero, "r")
        radiantUL.append(liHero)
    
    }
     static appendDireHero(hero) {
        let direUL = document.getElementById("direListID")
    
        let liHero = Match.renderHero(hero, "d")
        direUL.append(liHero)
    
    }
    

    static clearHeroList(listID){
        var ul = document.getElementById(listID);
        while(ul.firstChild) ul.removeChild(ul.firstChild);
    }

    static clearWinners(){
        let containDiv = document.getElementById("containerWinner");
        while(containDiv.firstChild) containDiv.removeChild(containDiv.firstChild);
    }





}   //ends class