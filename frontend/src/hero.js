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

    
     updateHero(hero){
    win = "5_win"
    pick = "5_pick"
    winrate = (hero[win])/(hero[pick])
    winrate= winrate.toFixed(4)
    //console.log(`${hero.localized_name} has a winrate of ${winrate}`)
}

    static updateHeros(){
        dotadata().then(heros => {
            // console.log(heros)
            heros.forEach(hero => {
            updateHero(hero)
            })
        })
    }


}       //ends class