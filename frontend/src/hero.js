class Hero {

    constructor(hero){
        this.name = hero.attributes.name
        this.winrate = hero.attributes.winrate
        this.role = hero.attributes.role
    }
    appendRadiantHero(hero) {
        let radiantUL = document.getElementById("radiantListID")
    
        let liHero = renderHero(hero)
        radiantUL.append(liHero)
    
    }
    appendDireHero(hero) {
        let direUL = document.getElementById("direListID")
    
        let liHero = renderHero(hero)
        direUL.append(liHero)
    }

    
     static updateHero(hero){
        const win = "5_win"
        const pick = "5_pick"
        let winrate = (hero[win])/(hero[pick])
        winrate= winrate.toFixed(4)
        //console.log(`${hero.localized_name} has a winrate of ${winrate}`)
}

    static updateHeros(){
        apiService.getNewApiHeros().then(heros => {
            // console.log(heros)
            heros.forEach(hero => {
            Hero.updateHero(hero)
            })
        })
    }


}       //ends class