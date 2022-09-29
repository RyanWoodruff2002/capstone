class GamesController < ApplicationController

    def createGame
        game = Game.find_or_create_by(game_params)
        render json: game
    end

    private

    def game_params
        params.permit(:title, :thumbnail, :short_description, :game_url, :genre, :platform, :publisher, :developer)
    end

end
