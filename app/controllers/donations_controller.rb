class DonationsController < ApplicationController
    require 'rest-client'

    skip_before_action :authorized,  only: :animal_data

    def createDonation
        donation = Donation.create!(donation_params)
        render json: donation, status: :created
    end

    def animal_data
        response = RestClient.get 'https://private-anon-76232d64dd-endangeredanimals.apiary-mock.com/all_animal_data'
        data = JSON.parse response
        render json: data
    end

    private

    def donation_params
        params.permit(:user_id, :animal_id, :amount)
    end
end
