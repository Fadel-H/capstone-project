class AnimesController < ApplicationController
    def show
        anime = Anime.all 
        render json: anime
    end
end
