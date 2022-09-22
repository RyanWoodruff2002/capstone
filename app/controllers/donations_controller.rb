class DonationsController < ApplicationController
    require 'rest-client'

    def animal_data
        response = RestClient.get 'https://private-anon-76232d64dd-endangeredanimals.apiary-mock.com/all_animal_data'
        data = JSON.parse response
        render json: data
    end
end
