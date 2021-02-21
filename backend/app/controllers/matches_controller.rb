class MatchesController < ApplicationController
    def create
        match = Match.create(match_params)
        render json: match
    end

    def show
        match = Match.find_by(:id => params[:id].to_i)
        render json: match
    end
    
    def index 
        matches = Match.all 
        render json: matchSerializer.new(matches)


    end


    private

    def match_params
        params.require(:match).permit(:winner, :winner_probability)
    end
end
