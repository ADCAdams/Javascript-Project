class Hero {

    constructor(hero){
        this.name = hero.attributes.name
        this.winrate = hero.attributes.winrate
        this.role = hero.attributes.role
    }

    renderHero(hero){
        let newli = document.createElement('li')
        newli.className="heroListItem"
        newli.innerHTML = `<span class="heroLiSpan"> <span class="heroNameSpan">
        ${hero.name}
        </span>
        <span class="heroWinrateSpan">
        ${parseFloat(hero.winrate*100).toFixed(2)+"%"}
        </span> </span>`
        return newli
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