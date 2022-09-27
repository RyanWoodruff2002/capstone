Rails.application.routes.draw do

  post "/donation", to: "donations#createDonation"
  post "/animal", to: "animals#createAnimal"

  delete "/logout", to: "sessions#destroy"
  post "/login", to: "sessions#create"
  post "/users", to: "users#create"

  get "/animals", to: "donations#animal_data"

  get 'sessions/create'
  get 'sessions/destroy'

  get '/signup', to: "users#create"
  get '/me', to: "users#show"
  delete '/deactivate/:id', to: "users#delete"
  patch '/update_email/:id', to: "users#update"
  get '/my_animals/:id', to: "users#my_animals"

  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
