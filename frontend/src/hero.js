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














}       //ends class