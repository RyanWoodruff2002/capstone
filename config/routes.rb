Rails.application.routes.draw do

  post "/bookmark", to: "bookmarks#createBookmark"
  post "/game", to: "games#createGame"

  delete "/logout", to: "sessions#destroy"
  post "/login", to: "sessions#create"
  post "/users", to: "users#create"

  get "/games", to: "bookmarks#game_data"

  get 'sessions/create'
  get 'sessions/destroy'

  get '/signup', to: "users#create"
  get '/me', to: "users#show"
  delete '/deactivate', to: "users#delete"
  patch '/update_email', to: "users#update"
  get '/my_games', to: "users#my_games"

  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
