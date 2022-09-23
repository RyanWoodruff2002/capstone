class AnimalsController < ApplicationController

    def createAnimal
        animal = Animal.find_or_create_by(animal_params)
        render json: animal
    end

    private

    def animal_params
        params.permit(:common_name, :video_url, :imageLink, :assoc_threats)
    end

end
