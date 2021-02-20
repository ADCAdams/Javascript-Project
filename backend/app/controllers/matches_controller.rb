class MatchesController < ApplicationController
    def create
        if Match.find_by(:id => match_params[:id])
            match = Match.find_by(:name => match_params[:name])
            redirect_to "/matches/#{Match.id}"
        else
            match = Match.create(Match_params)
            render json: match
        end
    end

    def show
        match = Match.find_by(:id => params[:id].to_i)
        render json: match
    end
    
end
