class MangaAnimeBridgesController < ApplicationController
    def create
        MangaAnimeBridge.create(user_id: params[:user_id], anime_id: params[:anime_id])
    end

end
