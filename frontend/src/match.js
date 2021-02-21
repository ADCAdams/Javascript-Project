class Match {

    constructor(radiantHeroArray,direHeroArary){
        this.matchHeros = [] //purpose of checking for a unique hero list later
        this.winner = ""
        this.winnerProbability = 0
        this.matchHeros.push(radiantArray)
        this.matchHeros.push(direArray)
        this.calculateMatchWinner(radiantHeroArray,direHeroArary)
    }

     calculateTeamWinAvg(teamHeroArray){
        const teamWinAvg = 0
        teamHeroArray.forEach(hero){
            teamWinAvg += hero.winrate
        }
        teamWinAvg = teamWinAvg/5
        return teamWinAvg
    }
    
     calculateMatchWinner(radiantHeroArray,direHeroArary){
         const radiantWinAvg = calculateTeamWinAvg(radiantHeroArray)
         const direWinAvg = calculateTeamWinAvg(direHeroArary)
        if (radiantWinAvg > direWinAvg){
            this.winner = "Radiant"
            const delta = radiantWinAvg - direWinAvg
            this.winnerProbability = (delta/.20)  //or 'liklihood'
        } else if (direWinAvg > radiantWinAvg){
            this.winner = "Dire"
            const delta =  direWinAvg - radiantWinAvg
            this.winnerProbability = (delta/.20)  //or 'liklihood'
        } else {
            this.winner = "Tie"
        }
    }
 

    





}   //ends class