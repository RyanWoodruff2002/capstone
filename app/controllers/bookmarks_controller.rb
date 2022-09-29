class BookmarksController < ApplicationController
    require 'rest-client'

    skip_before_action :authorized,  only: :game_data

    def createBookmark
        bookmark = Bookmark.find_or_create_by(bookmark_params)
        render json: bookmark, status: :created
    end

    def game_data
        response = RestClient.get 'https://www.mmobomb.com/api1/games'
        data = JSON.parse response
        render json: data
    end

    private

    def bookmark_params
        params.permit(:user_id, :game_id)
    end
end
