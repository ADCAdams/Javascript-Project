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
    
end

