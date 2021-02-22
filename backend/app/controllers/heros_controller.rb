class HerosController < ApplicationController

    
    def show
        hero = Hero.find_by(id: params[:id])

        render json: HeroSerializer.new(hero)
    end

    def index 
        heros = Hero.all 
        render json: HeroSerializer.new(heros)
        #render json: Heros

    end

    def update
        #binding.pry
        hero = Hero.find_by(name: params[:hero][:name])
        # hero.update(hero_params)    hero_params is the style I used in my #update in  myRails project in mod3
        hero.update(winrate: params[:hero][:winrate]);
        render json: "ok"
    end

    private

    def hero_params
        params.require(:hero).permit(:name, :winrate)
    end


end

