class ApiService {

    constructor() {
        this.baseUrl = "http://localhost:3000"
        this.herosUrl = "http://localhost:3000/heros"
        this.dotaWebsiteApiUrl = "https://api.opendota.com/api/heroStats"
    }

    //const apiService = new ApiService()

    getHeros() {
        return fetch(this.herosUrl).then(res => res.json()); //returns array inside json
    }

    getNewApiHeros(){
        return fetch("https://api.opendota.com/api/heroStats").then(res => res.json());
    }

    postMatch(matchArg){
        return fetch(`${this.baseUrl}/matches`, {
                method: "POST",
                headers:{
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify(
                    {
                        match: {
                            winner: matchArg.winner,
                            winnerProbability: matchArg.winnerProbability
                        }
                    }
                )
            })
            .then(resp => resp.json())
    }

}