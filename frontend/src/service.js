class ApiService {

    constructor() {
        this.baseUrl = "http://localhost:3000"
        this.herosUrl = "http://localhost:3000/heros"
        this.dotaWebsiteApiUrl = "https://api.opendota.com/api/heroStats"
    }

    BASE_URL = "http://localhost:3000"
    HEROS_URL = `${BASE_URL}/heros`

    //const apiService = new ApiService()

    getHeros() {
        return fetch(HEROS_URL).then(res => res.json());
    }

    dotadata(){
        return fetch("https://api.opendota.com/api/heroStats").then(res => res.json());
    }

}