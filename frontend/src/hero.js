class Hero {

    constructor(hero){
        try { 
            if (hero.base_health > 0){          //checks if hero is from liveAPI, or my backend
            this.name = hero.localized_name;
            this.winrate = 0;
            this.role = "";
        } else {                                //else, hero coming from my backend db
            this.name = hero.attributes.name;
            this.winrate = hero.attributes.winrate
            this.role = hero.attributes.role
        } 
        }
        catch(err){
            alert(err.message)
        }
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
        winrate= parseFloat(winrate.toFixed(4));


        let newApiHero = new Hero(hero)
        newApiHero.winrate = winrate

        apiService.updateHeroDB(newApiHero);
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